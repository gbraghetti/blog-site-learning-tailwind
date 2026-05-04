import { posts as allPosts } from "#velite";
import { PostPage } from "@/templates/blog";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);
  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author.name }],
    robots: "index, follow",
    openGraph: {
      images: [post.image],
    },
  };
}

export const revalidate = 60; // ISR

export async function generateStaticParams() {
  // SSG
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound(); // vai levar o usuário pra página que criamos de 404.
  }

  return <PostPage post={post} />;
}
