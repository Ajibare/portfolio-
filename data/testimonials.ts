import type { Testimonial } from "@/types";

/**
 * Only real, verifiable testimonials belong here. Never invent quotes.
 */
export const testimonials: Testimonial[] = [
  {
    id: "saaj-partners",
    quote:
      "I'm very impressed with the website Babajide delivered for SAAJ Partners and Consultants Ltd. He took the time to understand our vision, requirements, and business goals, then translated them into a clean, professional, and functional website. What stood out most was his attention to detail, professionalism, communication, and commitment throughout the project. The final website is responsive, user-friendly, visually appealing, and effectively represents our organization. I would highly recommend Babajide to any business looking for a reliable and skilled software developer. He delivered an excellent job and brought our vision to life.",
    author: "Ajibare Adeyinka",
    role: "CEO/GMD",
    company: "SAAJ Partners and Consultants Ltd.",
  },
  {
    id: "vastcare-pharmacy",
    quote:
      "Working with Babajide on the VastCare Pharmacy website was a great experience. He understood what we wanted to achieve and transformed our ideas into a modern, professional, and user-friendly website. He was patient, responsive, and paid close attention to the details that mattered to our business. He also made sure the website worked well across different devices and provided a smooth experience for our customers. Beyond his technical ability, I appreciate his professionalism, creativity, and willingness to explain things clearly. He is the kind of developer who genuinely cares about the quality of the final product. I'm pleased with the outcome and would confidently recommend Babajide to businesses looking for a dependable developer.",
    author: "Adebowale Tunde",
    role: "CEO",
    company: "VastCare Pharmacy",
  },
  {
    id: "web-application-client",
    quote:
      "Babajide did an excellent job developing our web application. From the beginning, he demonstrated a strong understanding of both the technical requirements and the business problem we were trying to solve. He was able to turn our ideas into a functional application while keeping the interface simple and easy to use. His problem-solving ability, attention to detail, and willingness to make improvements throughout the development process really stood out. He is not just someone who writes code; he takes ownership of the project and thinks about how the product will actually be used by people. I would definitely recommend Babajide to anyone looking for a serious and reliable software developer.",
    author: "Blessing John",
    role: "",
    company: "",
  },
  {
    id: "mentorship-mentee",
    quote:
      "Learning software development with Babajide has been a really valuable experience. What I appreciate most is his ability to break down difficult concepts and explain them in a way that is easy to understand. He doesn't just teach you how to write code; he teaches you how to think like a developer, solve problems, debug issues, and understand why things work the way they do. His practical approach to teaching made it easier for me to connect what I was learning with real-world development. He was also patient when answering questions and willing to go over difficult topics until they became clearer. I would highly recommend Babajide to anyone looking for a developer who can both build real software and effectively mentor aspiring developers.",
    author: "Martin",
    role: "Student",
    company: "",
  },
  {
    id: "training-student",
    quote:
      "Babajide has been a great mentor and instructor. His teaching style is practical, straightforward, and focused on helping students actually understand what they are doing rather than simply memorizing code. During my learning experience, he helped me improve not only my coding skills but also my approach to solving problems and building projects. His knowledge of modern web development and his experience working on real projects made the lessons much more practical. He is patient, approachable, and genuinely interested in seeing his students improve. I'm grateful for the knowledge and confidence I gained from learning under him. I would strongly recommend Babajide to anyone who wants to learn software development from someone who understands both the technical and practical sides of the industry.",
    author: "Martin",
    role: "Student",
    company: "",
  },
];

export const testimonialsPending = testimonials.length === 0;
