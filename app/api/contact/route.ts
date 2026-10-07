import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactResponseSchema, contactSchema } from "@/lib/schemas";
import { site } from "@/data/site";

/**
 * Contact form endpoint.
 *
 * Sends the message through Resend when `RESEND_API_KEY` and the
 * `CONTACT_RECIPIENT` address are configured. Running without a key returns a
 * clear "not configured" error instead of failing silently, so the form stays
 * honest during development.
 */
export async function POST(request: Request) {
  const parsed = await request.json().catch(() => null);
  if (!parsed) {
    return NextResponse.json(
      contactResponseSchema.parse({ ok: false, error: "Invalid request body." }),
      { status: 400 },
    );
  }

  const result = contactSchema.safeParse(parsed);
  if (!result.success) {
    const first = result.error.issues[0]?.message ?? "Please check the form.";
    return NextResponse.json(
      contactResponseSchema.parse({ ok: false, error: first }),
      { status: 400 },
    );
  }

  const { name, email, projectType, message } = result.data;
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_RECIPIENT ?? site.email;

  if (!apiKey) {
    return NextResponse.json(
      contactResponseSchema.parse({
        ok: false,
        error: "Contact form is not configured yet — email me directly instead.",
      }),
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [recipient],
      replyTo: email,
      subject: `New inquiry — ${projectType} — from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\n${message}`,
    });
    return NextResponse.json(
      contactResponseSchema.parse({ ok: true }),
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      contactResponseSchema.parse({
        ok: false,
        error: "Something went wrong sending your message. Please try again.",
      }),
      { status: 500 },
    );
  }
}