# HelloAnime Project Context

## Project Overview

**HelloAnime** is a web application designed to explore and discover anime. It utilizes the [Jikan API](https://jikan.moe/) (Unofficial MyAnimeList API) to fetch and display data such as top-rated anime, currently airing shows, and search results.

The project is built with a modern frontend stack emphasizing performance and user experience, featuring smooth animations and a responsive design.

### Tech Stack

*   **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **UI Components:**
    *   [Swiper](https://swiperjs.com/) (Carousels/Sliders)
    *   [Lucide React](https://lucide.dev/) (Icons)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Utilities:** `clsx`, `tailwind-merge`

## Getting Started

### Prerequisites

*   Node.js (LTS recommended)
*   Package manager: `npm`, `pnpm`, or `yarn` (Lockfile indicates `pnpm` usage is possible, but standard `package-lock` or `yarn.lock` absence implies checking `package.json` scripts). *Note: The presence of `pnpm-lock.yaml` suggests `pnpm` is the preferred package manager.*

### Installation & Running

1.  **Install dependencies:**
    ```bash
    npm install
    # or
    pnpm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    # or
    pnpm dev
    ```

3.  **Build for production:**
    ```bash
    npm run build
    # or
    pnpm build
    ```

4.  **Linting:**
    ```bash
    npm run lint
    ```

## Project Structure

```text
src/
├── app/                  # Next.js App Router pages and layouts
│   ├── globals.css       # Global styles and Tailwind v4 theme config
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/           # Reusable UI components
│   ├── cardSlider/       # Anime card carousels
│   ├── hero/             # Hero section components
│   ├── navbar/           # Navigation bar components
│   └── ui/               # Generic UI elements (e.g., Title, Fonts)
├── hooks/                # Custom React hooks for logic and data fetching
│   ├── getTopAnime.ts    # Fetches top/airing anime from Jikan API
│   ├── searchAnime.ts    # Search functionality
│   └── useDebounce.ts    # Debounce utility for search
├── lib/                  # Utility functions
│   └── utils.ts          # 'cn' utility for class merging
└── types/                # TypeScript type definitions
    └── anime.ts          # Data models (Anime, Genre, etc.)
```

## Development Conventions

### Styling

*   **Tailwind CSS v4:** The project uses the latest Tailwind CSS version.
*   **Theming:** Colors and fonts are defined as CSS variables in `src/app/globals.css` under the `@theme` directive.
    *   Colors: `--color-brand`, `--color-background`, `--color-secondary`, etc.
    *   Fonts: `--font-sans`, `--font-poppins`.
*   **Class Merging:** Use the `cn()` utility (imported from `@/lib/utils`) when conditionally applying classes to ensure Tailwind classes merge correctly without conflicts.

### Data Fetching

*   **Pattern:** Data fetching is encapsulated in custom hooks (e.g., `useGetTopAnime`, `searchAnime`) located in `src/hooks/`.
*   **API:** All data comes from `https://api.jikan.moe/v4`.
*   **Error Handling:** Hooks should handle API errors gracefully, typically returning `null` or error states.

### Component Structure

*   Components are grouped by feature (e.g., `hero`, `navbar`) rather than type.
*   Generic UI components live in `src/components/ui`.

## External APIs

*   **Jikan API v4:**
    *   Base URL: `https://api.jikan.moe/v4`
    *   Endpoints used include `/top/anime` (with filters like `type=tv` and `filter=airing`).
