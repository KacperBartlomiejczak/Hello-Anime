# Learn by Contributing to HelloAnime! 🚀📚

Welcome to HelloAnime! This project is designed not just as a functional application, but also as a learning playground for modern web development. If you're looking to gain hands-on experience with the latest technologies, you've come to the right place.

## 🎯 What You Will Learn

By exploring and contributing to HelloAnime, you'll gain practical experience with:

### Next.js 16 (App Router) Mastery
*   Understand the **App Router architecture**, including Server Components and Client Components.
*   See how to manage **layouts, pages, and loading states** (`loading.tsx`) within `src/app`.
*   Learn about **data fetching directly in Server Components** and custom hooks for client-side interactions.

### Modern React Development with TypeScript
*   Develop robust and type-safe components using **TypeScript**.
*   Work with **React 19 features**, including the latest patterns for component design.
*   Explore **custom hooks** in `src/hooks` for reusable logic (e.g., `useDebounce`, `getTopAnime`).

### Advanced Styling with Tailwind CSS v4
*   Grasp the **utility-first approach** of Tailwind CSS.
*   Understand **Tailwind v4's new features** and how our theming is configured using CSS variables in `src/app/globals.css`.
*   Learn to effectively use `clsx` and `tailwind-merge` (via `cn` utility in `src/lib/utils.ts`) for dynamic class generation.

### Seamless Animations with Framer Motion
*   Implement engaging **UI animations and transitions** using Framer Motion.
*   See practical examples in components like `src/components/hero` and `src/components/cardSlider`.

### Data Integration with External APIs (Jikan API)
*   Learn how to **integrate with a third-party REST API** (`https://api.jikan.moe/v4`).
*   Understand **data serialization and deserialization** using TypeScript interfaces (`src/types/anime.ts`).
*   Explore patterns for **fetching and caching data**.

## 🗺️ Codebase Walkthrough

Here are some key areas to start your exploration:

*   **`src/app/page.tsx`**: The entry point for the homepage, demonstrating how components are assembled.
*   **`src/app/layout.tsx`**: Where global elements, fonts, and providers are set up.
*   **`src/hooks/getTopAnime.ts`**: A clear example of how we fetch data from the Jikan API.
*   **`src/components/cardSlider/card.tsx`**: A good starting point to understand our component structure and styling.
*   **`src/components/hero/hero.tsx`**: See how Framer Motion is integrated for dynamic UI effects.
*   **`src/types/anime.ts`**: Essential for understanding the data models used throughout the application.

## 🔗 Key Learning Resources

These are the primary documentation sources for the technologies we use. Dive in to deepen your understanding!

*   **Next.js:** [Official Docs](https://nextjs.org/docs), [Learn Next.js](https://nextjs.org/learn)
*   **React:** [Official Docs](https://react.dev/learn)
*   **TypeScript:** [Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
*   **Tailwind CSS:** [Official Docs](https://tailwindcss.com/docs), [Tailwind CSS v4 Alpha Blog](https://tailwindcss.com/blog/tailwindcss-v4-alpha)
*   **Framer Motion:** [Official Docs](https://www.framer.com/motion/)
*   **Swiper:** [Official Docs](https://swiperjs.com/swiper-api)
*   **Jikan API:** [Official Website](https://jikan.moe/)

---
We encourage you to fork the repository, experiment with the code, and open pull requests. Happy coding!