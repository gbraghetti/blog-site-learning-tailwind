import { BlogList } from "@/templates/blog";
import { posts as allPosts } from "#velite";

export default function BlogListPage() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return <BlogList posts={sortedPosts} />;
}
