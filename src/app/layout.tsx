import { Layout } from "@/components/layout";
import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site.Set",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
