import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { stripPending } from "@/lib/utils";
import { WorkCaseStudy } from "@/components/work/WorkCaseStudy";

type Props = PageProps<"/work/[slug]">;

const websiteUrl = site.url;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  const title = `${project.name} — ${stripPending(project.summary)}`;
  const description = stripPending(project.summary);

  return {
    title,
    description,
    openGraph: {
      title: `${project.name} — Case study`,
      description,
      url: `${websiteUrl}/work/${project.slug}`,
      images: [{ url: `${websiteUrl}${project.cover.src}`, alt: project.cover.alt }],
    },
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return <WorkCaseStudy project={project} prev={prev} next={next} />;
}