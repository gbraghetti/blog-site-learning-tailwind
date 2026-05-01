Analyze the current state of the project at the working directory and rewrite `docs/project-map.md` with up-to-date information.

Steps:
1. Read every file in `src/components/`, `src/pages/`, `src/styles/`, `src/lib/`, `tailwind.config.ts`, `components.json`
2. Map the full component tree: which component renders which, what className chains exist, what height/flex/grid properties each container has
3. Trace the height chain from the root Layout div down to the deepest relevant containers, noting where the chain breaks (no explicit height)
4. Update `docs/project-map.md` — replace its full content with the new map. Always include: Stack, Entry Points, Layout Tree (ASCII), one section per component with key classes, Height Chain analysis, and Globals/Config table
5. Set "Last updated" to today's date at the top of the file

Do not summarize — rewrite the full file with accurate, current content.
