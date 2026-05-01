import { PostPage } from "@/templates/blog";
import { GetStaticPaths, GetStaticProps } from "next";
import { posts as allPosts } from "#velite";
import { type PostPageProps } from "@/templates/blog";

export default function Post({ post }: PostPageProps) {
  return <PostPage post={post} />;
}

export const getStaticPaths = (async () => {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  /**
   * fallback: "blocking" — slugs fora dos 5 pré-gerados são renderizados no servidor
   *   sob demanda e cacheados; o visitante espera, mas a página existe.
   * fallback: false — qualquer slug fora dos 5 pré-gerados retorna 404.
   *   pois ele tem apenas esses 5 gerados.
   */
  const recentPosts = sortedPosts.slice(0, 5);
  const paths = recentPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const { slug } = context.params as { slug: string };
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}) satisfies GetStaticProps;
