import { BlogList } from "@/templates/blog";
import { posts as allPosts } from "#velite";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Venda seus produtos como afiliado em um único lugar",
  robots: "index, follow",
  openGraph: {
    title: "Blog",
    description: "Dicas e estratégias para impulsionar seu negócio",
    url: "https://blog-site-learning-tailwind.vercel.app/og-image.jpg",
    siteName: "Site.Set",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://blog-site-learning-tailwind.vercel.app/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Site.Set",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Site.Set",
    description: "Venda seus produtos como afiliado em um único lugar",
    images: [
      {
        url: "https://blog-site-learning-tailwind.vercel.app/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Site.Set",
      },
    ],
  },
};

export default function BlogListPage() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return <BlogList posts={sortedPosts} />;
}
