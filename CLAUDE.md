# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a personal portfolio website built with Next.js 14 using the App Router.

**Tech Stack:**
- Next.js 14 with App Router
- TypeScript with strict mode
- Tailwind CSS for styling
- Headless UI + Heroicons for UI components
- Vercel Analytics and Speed Insights for monitoring

**Project Structure:**
- `app/` - Next.js App Router pages and layouts
- `app/page.tsx` - Main portfolio page (client component with navigation, project showcases)
- `app/layout.tsx` - Root layout with Inter font, Vercel analytics
- `public/` - Static assets (images, icons)

**Path Aliases:**
- `@/*` maps to project root (configured in tsconfig.json)

**Custom Tailwind Extensions:**
- `shadow-3xl` and `shadow-4xl` for custom box shadows
- `gradient-radial` and `gradient-conic` background utilities
