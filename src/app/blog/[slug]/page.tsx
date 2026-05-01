import { posts as allPosts } from "#velite";
import { PostPage } from "@/templates/blog";
import { notFound } from "next/navigation";

type BlogPostPage = {
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 60; // ISR

export async function generateStaticParams() {
  // SSG
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPage) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound(); // vai levar o usuário pra página que criamos de 404.
  }

  return <PostPage post={post} />;
}
