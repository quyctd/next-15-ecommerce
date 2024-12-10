# Modern E-commerce Frontend

A modern, responsive e-commerce frontend built with Next.js 15, TypeScript, and Tailwind CSS. Features a dark-themed UI with seamless shopping experience.

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui with Radix UI
- **State Management:** 
  - Jotai for global state
  - TanStack Query for server state
  - nuqs for URL state
- **Code Quality:**
  - Biome for linting and formatting
  - Strict TypeScript configuration
- **Development Tools:**
  - Turbopack for faster development builds
  - Hot Module Replacement (HMR)

## Key Features

- 🎨 Modern dark theme with custom color palette
- 🛍️ Product browsing with advanced filtering
- 🔍 Search functionality
- 🛒 Shopping cart management
- 📱 Responsive design for all devices
- 🌐 Internationalization ready
- 🖼️ Image optimization with Next.js Image component
- ⚡️ Fast page loads with optimized assets

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `dev` - Start development server with Turbopack
- `build` - Create production build
- `start` - Start production server
- `lint` - Run Biome linting
- `format` - Run Biome formatting
- `add:ui` - Add new shadcn/ui components
- `generate:icons` - Generate icon components

## Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/         # Reusable components
│   ├── ui/            # Base UI components
│   ├── layout/        # Layout components
│   └── product/       # Product-specific components
├── constants/         # Application constants
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── stores/           # Global state management
└── types/            # TypeScript type definitions
```

## Environment Setup

The project uses various configuration files:

- `biome.json` - Biome configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `next.config.ts` - Next.js configuration

## Development

This project uses Biome for code formatting and linting. VSCode settings are included for automatic formatting on save.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
