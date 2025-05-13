import NewsDetailContainer from "@/containers/news/detail";
import { newsData } from "./data";

export async function generateStaticParams() {
  const posts = newsData.map((post) => ({
    ...post,
    slug: post.key.toString(),
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
      <NewsDetailContainer slug={slug} />
    </>
  );
}
