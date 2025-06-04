import NewsDetailContainer from "@/containers/news/detail";
import { newsData } from "./data";
import { Suspense } from "react";

export async function generateStaticParams() {
  const posts = newsData.map((post) => ({
    ...post,
    slug: post.key,
  }));

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function NewsDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NewsDetailContainer slug={slug} />
      </Suspense>
    </>
  );
}
