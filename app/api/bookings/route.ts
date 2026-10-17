import { NextResponse } from "next/server";
import { z } from "zod";

// --- Booking form schema ---
const appointmentTypeOptions = [
  "discovery-call",
  "web-application",
  "enterprise-software",
  "technical-consultation",
  "mentorship",
] as const;

const bookingFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z.string().trim().email("Please enter a valid email address.").max(254),
  company: z.string().trim().optional(),
  appointmentType: z.enum(appointmentTypeOptions),
  date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Please select a valid date.",
  }),
  time: z.string().refine(
    (time) => /^([01]\d|2[0-3]):([0-5]\d)$/.test(time),
    "Please select a valid time in HH:MM format.",
  ),
  timezone: z.string().default("Local"),
  description: z
    .string()
    .trim()
    .min(10, "Give a little more detail — at least 10 characters.")
    .max(2000),
});

// --- In-memory demo availability (replace with Cal.com/Calendly integration) ---
const demoSlots = new Map<
  string,
  {
    date: string;
    time: string;
    appointmentType: z.infer<typeof bookingFormSchema>["appointmentType"];
    duration: number;
  }
>();

function initDemoSlots() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  const months = [month, month + 1];
  for (const m of months) {
    const targetMonth = m < 12 ? m : 0;
    const targetYear = m < 12 ? year : year + 1;

    for (let d = 1; d <= 31; d++) {
      const dateObj = new Date(targetYear, targetMonth, d);
      const day = dateObj.getDay();
      if (day === 0 || day === 5) continue;

      const isoDate = dateObj.toISOString().split("T")[0];

      const times: string[] = [];
      for (let h = 9; h <= 17; h++) {
        for (const min of [0, 30]) {
          const paddedHour = h.toString().padStart(2, "0");
          const paddedMin = min.toString().padStart(2, "0");
          times.push(`${paddedHour}:${paddedMin}`);
        }
      }

      const slotTypes = [
        { type: "discovery-call" as const, duration: 15 },
        { type: "web-application" as const, duration: 30 },
        { type: "enterprise-software" as const, duration: 45 },
        { type: "technical-consultation" as const, duration: 30 },
        { type: "mentorship" as const, duration: 15 },
      ];

      for (const st of slotTypes) {
        const typeTimes = times.filter(
          (t, i) => i % slotTypes.length === slotTypes.indexOf(st),
        );
        for (const t of typeTimes.slice(0, 1)) {
          demoSlots.set(`${isoDate}-${t}`, {
            date: isoDate,
            time: t,
            appointmentType: st.type,
            duration: st.duration,
          });
        }
      }
    }
  }
}

initDemoSlots();

function isSlotBooked(date: string, time: string): boolean {
  return demoSlots.has(`${date}-${time}`);
}

function bookSlot(date: string, time: string): boolean {
  if (isSlotBooked(date, time)) return false;
  demoSlots.set(`${date}-${time}`, {
    date,
    time,
    appointmentType: "discovery-call",
    duration: 30,
  });
  return true;
}

// GET: fetch available slots for a given date
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date") ?? new Date().toISOString().split("T")[0];

  const slots: Array<{
    time: string;
    appointmentType: string;
    duration: number;
  }> = [];

  for (const [key, slot] of demoSlots) {
    if (slot.date === date) {
      slots.push({
        time: slot.time,
        appointmentType: slot.appointmentType,
        duration: slot.duration,
      });
    }
  }

  // Deduplicate and sort by time
  const uniqueTimes = Array.from(new Set(slots.map((s) => s.time)));
  const sortedSlots = uniqueTimes
    .map((time) => {
      const slot = slots.find((s) => s.time === time);
      return {
        time,
        appointmentType: slot?.appointmentType ?? "discovery-call",
        duration: slot?.duration ?? 30,
      };
    })
    .sort((a, b) => a.time.localeCompare(b.time));

  if (sortedSlots.length === 0) {
    return NextResponse.json({ available: false, slots: [] });
  }

  return NextResponse.json({ available: true, slots: sortedSlots });
}

// POST: create a booking
export async function POST(request: Request) {
  const body = await request.json();

  const result = bookingFormSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { ok: false, error: result.error.issues[0]?.message ?? "Invalid form data." },
      { status: 400 },
    );
  }

  const {
    name,
    email,
    company,
    appointmentType,
    date,
    time,
    timezone,
    description,
  } = result.data;

  if (isSlotBooked(date, time)) {
    return NextResponse.json(
      { ok: false, error: "This time slot is no longer available. Please choose another." },
      { status: 409 },
    );
  }

  const booked = bookSlot(date, time);
  if (!booked) {
    return NextResponse.json(
      { ok: false, error: "Failed to book the slot. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    booking: {
      name,
      email,
      company,
      appointmentType,
      date,
      time,
      timezone,
      description,
    },
  });
}