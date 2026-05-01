import { basename } from "path";
import { defineConfig, s } from "velite";

export default defineConfig({
  root: "posts",
  collections: {
    posts: {
      name: "Post",
      pattern: "**/*.md",
      schema: s
        .object({
          title: s.string(),
          date: s.isodate(),
          description: s.string(),
          image: s.string(),
          content: s.markdown(),
          raw: s.raw(),
          author: s.object({
            name: s.string(),
            avatar: s.string(),
          }),
        })
        .transform((data, { meta }) => ({
          ...data,
          slug: basename(meta.path, ".md"),
        })),
    },
  },
});
