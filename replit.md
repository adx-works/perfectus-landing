# Perfectus Dental Clinic Website

## Overview

This is a dental clinic website for "Перфектус" (Perfectus), a Russian dental practice. The application is a full-stack web application built with React on the frontend and Express on the backend, featuring a marketing/informational website showcasing the clinic's services, specialists, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight router)
- **State Management**: TanStack React Query for server state
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Build Tool**: Vite with hot module replacement

The frontend follows a page-based structure with reusable section components:
- `client/src/pages/` - Top-level page components
- `client/src/pages/sections/` - Page section components (Header, Hero, Services, etc.)
- `client/src/components/ui/` - Reusable UI components from shadcn/ui

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Server**: Node.js with HTTP server
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Development**: Vite dev server integration for HMR

The backend uses a storage interface pattern (`server/storage.ts`) that abstracts data operations, currently implemented with in-memory storage but designed to be swapped for database implementations.

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `shared/schema.ts` using Drizzle's table definitions
- **Validation**: Zod schemas generated from Drizzle schemas via drizzle-zod
- **Migrations**: Managed via `drizzle-kit push`

Current schema includes a `users` table with id, username, and password fields.

### Project Structure
```
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/ui/  # shadcn/ui components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utilities and query client
├── server/           # Backend Express application
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data storage interface
│   └── vite.ts       # Vite dev server setup
├── shared/           # Shared code between frontend/backend
│   └── schema.ts     # Database schema definitions
└── migrations/       # Drizzle database migrations
```

### Path Aliases
- `@/*` → `./client/src/*`
- `@shared/*` → `./shared/*`
- `@assets` → `./attached_assets`

## External Dependencies

### Database
- **PostgreSQL**: Primary database (via Neon serverless driver)
- **Connection**: Requires `DATABASE_URL` environment variable

### UI/Component Libraries
- **Radix UI**: Full suite of accessible primitives (accordion, dialog, dropdown, etc.)
- **shadcn/ui**: Pre-built component styling using "new-york" style variant
- **Lucide React**: Icon library

### Key NPM Packages
- `@tanstack/react-query`: Server state management
- `drizzle-orm` / `drizzle-kit`: Database ORM and migrations
- `react-hook-form` + `@hookform/resolvers`: Form handling with Zod validation
- `date-fns`: Date utility library
- `embla-carousel-react`: Carousel component
- `vaul`: Drawer component
- `cmdk`: Command palette component

### Development Tools
- `@replit/vite-plugin-runtime-error-modal`: Error overlay for development
- `@replit/vite-plugin-cartographer`: Replit-specific dev tooling
- `esbuild`: Production bundling for server code