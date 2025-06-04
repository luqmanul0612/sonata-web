import ProjectsDetailContainer from "@/containers/projects/detail";
import { projectsData } from "./data";
import { Suspense } from "react";

export async function generateStaticParams() {
  const posts = projectsData.map((post) => ({
    ...post,
    slug: post.key,
  }));

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function ProjectsDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsDetailContainer slug={slug} />
      </Suspense>
    </>
  );
}
