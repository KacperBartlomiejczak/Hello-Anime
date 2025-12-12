# HelloAnime 🌸

A captivating web application designed for anime enthusiasts to effortlessly discover, explore, and search for their favorite Japanese animations. Powered by the Jikan API (an unofficial MyAnimeList API), HelloAnime offers a sleek, responsive, and animated user experience.

## ✨ Features

*   **Top Anime:** Discover the most popular and highly-rated anime.
*   **Currently Airing:** Stay updated with the latest ongoing series.
*   **Dynamic Search:** Find any anime quickly with a smooth search experience.
*   **Rich Details:** View comprehensive information including synopsis, score, episodes, and genres.
*   **Responsive Design:** Enjoy a seamless experience across all devices.
*   **Smooth Animations:** Engaging UI/UX with Framer Motion.

## 🛠️ Tech Stack

*   **Framework:** [Next.js 16](https://nextjs.org/) (App Router) 🚀
*   **Language:** [TypeScript](https://www.typescriptlang.org/) 🟦
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) 🎨
*   **UI/Animations:**
    *   [Framer Motion](https://www.framer.com/motion/) ✨
    *   [Swiper](https://swiperjs.com/) (Carousels/Sliders) ↔️
    *   [Lucide React](https://lucide.dev/) (Icons) 💡
*   **Utilities:** `clsx`, `tailwind-merge` for robust class management.

## 🚀 Getting Started

To get the HelloAnime project up and running on your local machine, follow these simple steps.

### Prerequisites

Make sure you have the following installed:

*   [Node.js](https://nodejs.org/) (LTS recommended)
*   A package manager: [pnpm](https://pnpm.io/) (recommended), [npm](https://www.npmjs.com/), or [yarn](https://yarnpkg.com/)

### Installation & Running

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/helloanime.git
    cd helloanime
    ```

2.  **Install dependencies:**
    *(pnpm is recommended as per `pnpm-lock.yaml`)*
    ```bash
    pnpm install
    # or npm install
    ```

3.  **Run the development server:**
    ```bash
    pnpm dev
    # or npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

4.  **Build for production:**
    ```bash
    pnpm build
    # or npm run build
    ```

5.  **Linting:**
    ```bash
    pnpm lint
    # or npm run lint
    ```

## 📂 Project Structure

The core logic and UI components are organized within the `src/` directory:

```
src/
├── app/                  # Next.js App Router pages, layouts, and global styles
├── components/           # Reusable UI modules (CardSlider, Hero, Navbar)
├── hooks/                # Custom React hooks for data fetching and logic
├── lib/                  # General utility functions
└── types/                # TypeScript type definitions for data models (e.g., Anime)
```

## 🔗 API Reference

This project utilizes the [Jikan API](https://jikan.moe/), an unofficial, community-driven API for MyAnimeList. All anime data is fetched from this external service.

---
Enjoy your anime discovery journey with HelloAnime!