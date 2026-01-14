# Contributing to HelloAnime 🌸

First off, thank you for considering contributing to HelloAnime! It's people like you that make the open-source community such an amazing place to learn, inspire, and create.

## 📚 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
  - [Project Structure](#project-structure)
  - [Styling](#styling)
  - [TypeScript](#typescript)
  - [Data Fetching](#data-fetching)
- [Testing](#testing)
- [Commit Convention](#commit-convention)
- [Pull Request Process](#pull-request-process)

## Project Overview

**HelloAnime** is a modern web application for exploring anime, powered by the [Jikan API](https://jikan.moe/). We focus on a premium user experience with smooth animations, responsive design, and clean code.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Package Manager:** pnpm

## Getting Started

### Prerequisites

- **Node.js** (LTS version recommended)
- **pnpm** (We use pnpm for package management. If you don't have it, install it via `npm install -g pnpm`)

### Installation

1.  **Fork the repository** on GitHub.
2.  **Clone your fork** locally:
    ```bash
    git clone https://github.com/YOUR_USERNAME/Hello-Anime.git
    cd helloanime
    ```
3.  **Install dependencies**:
    ```bash
    pnpm install
    ```
4.  **Run the development server**:
    ```bash
    pnpm dev
    ```
5.  Open [http://localhost:3000](http://localhost:3000) to see the app.

## Development Workflow

1.  **Create a branch** for your feature or fix:
    ```bash
    git checkout -b feature/amazing-feature
    # or
    git checkout -b fix/annoying-bug
    ```
2.  **Make your changes**.
3.  **Run linter and tests** to ensure no regressions:
    ```bash
    pnpm lint
    pnpm test
    ```
4.  **Commit your changes** (see [Commit Convention](#commit-convention)).
5.  **Push to your fork** and open a Pull Request.

## Coding Standards

### Project Structure

We follow a feature-based organization where possible, but core UI components are grouped together.

- `src/app`: Next.js App Router pages and layouts.
- `src/components`: Reusable UI components.
  - `src/components/ui`: Generic, reusable primitives (buttons, cards).
  - `src/components/[feature]`: Feature-specific components (e.g., `hero`, `navbar`).
- `src/hooks`: Custom React hooks for logic and data fetching.
- `src/lib`: Utility functions.
- `src/types`: TypeScript type definitions.

### Styling

- Use **Tailwind CSS v4** for all styling.
- Use the `cn()` utility (from `@/lib/utils`) for conditional class merging.
- Define custom colors and fonts in `src/app/globals.css` under the `@theme` directive.
- Avoid inline styles; use Tailwind utility classes or Framer Motion for dynamic values.

### TypeScript

- **Strict Types**: Avoid `any` whenever possible. Define interfaces/types in `src/types` or co-located with components if they are specific.
- **Props**: Use standard `interface` for component props (e.g., `interface ButtonProps { ... }`).

### Data Fetching

- Abstract data fetching logic into custom hooks (e.g., `useGetTopAnime`).
- Use the **Jikan API** (`https://api.jikan.moe/v4`).
- Handle errors gracefully in hooks and UI.

## Testing

We use **Jest** and **React Testing Library**.

- Run tests with: `pnpm test`
- Write tests for critical utilities and complex components.

## Commit Convention

We encourage the use of [Conventional Commits](https://www.conventionalcommits.org/).

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

Example: `feat: add user profile page`

## Pull Request Process

1.  Ensure your code builds and lints cleanly (`pnpm build`, `pnpm lint`).
2.  Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.
3.  The PR description should clearly state what usage pattern is being fixed or added.
4.  Request a review from the maintainers.

Thank you for contributing! 🚀
