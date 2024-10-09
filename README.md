# 2024-calendar-app

**initial setup:**

vite frontend tooling

- `❯ bun create vite calendar-app --template react-swc-ts`
- `❯ cd calendar-app/`
- `❯ bun install`
- `❯ bun run dev --port 5678`
- `❯ open -a safari --url "http://localhost:5678/"`
- `❯ bunx --bun vite build`
- more: https://bun.sh/guides/ecosystem/vite

tailwind css

- `❯ bun add -d tailwindcss postcss autoprefixer`
- `❯ bunx tailwindcss init --postcss --esm`
- more: https://tailwindcss.com/docs/guides/vite

routing

- `❯ bun add -d react-router-dom`
- more: https://reactrouter.com/en/main/start/tutorial

lucide icons

- `❯ bun add -d lucide-react`
- more: https://lucide.dev/icons/

clsx helper

- `❯ bun add -d clsx`
- more: https://github.com/lukeed/clsx

zod schema

- `❯ bun add -d zod`
- more: https://github.com/colinhacks/zod
