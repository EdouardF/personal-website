# Personal Website

A modern, responsive personal website built with Next.js, TypeScript, and Tailwind CSS. Features smooth parallax effects and animations powered by Framer Motion.

## Features

- Responsive design that works on all devices
- Dark mode support
- Smooth parallax scrolling effects
- Beautiful animations and transitions
- SEO optimized
- TypeScript for type safety
- Tailwind CSS for styling
- Easy to customize and extend

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

1. Update your personal information:
   - Edit the content in each component (`Hero.tsx`, `About.tsx`, etc.)
   - Replace "Your Name" with your actual name
   - Update social media links and profile URLs
   - Add your own experiences and projects

2. Customize the design:
   - Modify colors in `tailwind.config.ts`
   - Update fonts and typography
   - Adjust animations and transitions in the components

3. Add your own images:
   - Place your images in the `public` directory
   - Update the image paths in the components

## Project Structure

```
├── app/
│   ├── components/     # React components
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── public/            # Static files
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Built With

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)