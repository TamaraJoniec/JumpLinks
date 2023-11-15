# JumpLinks Component Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Link to deployed project
[https://jump-links.vercel.app/](https://jump-links.vercel.app/)

## Demo
![Website Demo](./src/demo.gif)


## Challenge Overview

The challenge was to build a jumplinks component that allows users to navigate to specific sections on the page. Key features implemented include:

- A jumplinks navigation bar that reveals links to different page sections.
- Clicking a link smoothly scrolls the page to the relevant section.
- The navigation bar sticks to the top of the window upon scrolling and releases when all sections have been passed.
- Active section highlighting within the navigation bar as the user scrolls through the page.
- A progress indicator showing the user's current position within the jumplink sections.

## Tech Stack
This implementation makes use of:

- JavaScript for dynamic interaction and scroll events.
- Tailwind CSS for styling the component and scroll behavior.
- The project avoids pre-made components to showcase original code.

