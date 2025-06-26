# Portfolio Website

## Overview

This is a modern, responsive portfolio website built with a full-stack architecture using React and Express.js. The application features a sleek design with animations, a contact form, and a comprehensive showcase of skills and projects. It's designed to be a professional portfolio site with smooth user interactions and modern web technologies.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: TailwindCSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and scroll-based animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Prepared for connect-pg-simple session store
- **API**: RESTful API endpoints for contact form and data retrieval

### Development Setup
- **Development Server**: Concurrent client and server development with Vite HMR
- **Build Process**: Vite for client build, esbuild for server bundling
- **Type Checking**: Strict TypeScript configuration across the stack

## Key Components

### Frontend Components
- **Navigation**: Responsive navigation with smooth scrolling and mobile menu
- **Hero Section**: Animated landing section with floating geometric shapes
- **About Section**: Personal information with statistics and social links
- **Projects Section**: Showcase of portfolio projects with technology tags
- **Skills Section**: Interactive skill bars and technology icons
- **Testimonials Section**: Client testimonials with avatar images
- **Contact Section**: Contact form with validation and submission handling

### Backend Components
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **API Routes**: Contact form submission and retrieval endpoints
- **Middleware**: Request logging, error handling, and static file serving
- **Database Schema**: Users and contact messages tables with Zod validation

### UI System
- **Design System**: Custom color palette with CSS variables for theming
- **Typography**: Responsive text scaling and font weight variations
- **Layout**: Responsive grid system with mobile-first approach
- **Animations**: Scroll-triggered animations and hover effects

## Data Flow

### Contact Form Flow
1. User fills out contact form in the frontend
2. Form data is validated using Zod schemas
3. API request sent to `/api/contact` endpoint
4. Server validates data and stores in database
5. Success/error response returned to client
6. Toast notification displayed to user

### Page Navigation Flow
1. User clicks navigation links
2. Smooth scrolling to target sections
3. Navigation state updates for active section
4. Mobile menu closes automatically on selection

### Data Fetching Flow
1. React Query manages API state
2. Automatic caching and background refetching
3. Error handling with user-friendly messages
4. Loading states for better UX

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **UI/UX**: Radix UI primitives, Framer Motion, Lucide React icons
- **Styling**: TailwindCSS, class-variance-authority, clsx
- **Forms**: React Hook Form with resolvers
- **Utilities**: date-fns, embla-carousel-react

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Validation**: Zod for schema validation
- **Session Management**: connect-pg-simple (configured but not actively used)
- **Development**: tsx for TypeScript execution

### Build Tools
- **Frontend**: Vite, @vitejs/plugin-react, PostCSS, Autoprefixer
- **Backend**: esbuild for production bundling
- **Development**: Replit-specific plugins for enhanced development experience

## Deployment Strategy

### Production Build
- **Client**: Vite builds optimized static assets to `dist/public`
- **Server**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle handles schema migrations and deployments

### Hosting Configuration
- **Platform**: Replit with autoscale deployment target
- **Database**: Neon Database serverless PostgreSQL
- **Environment**: Node.js 20 with PostgreSQL 16 module
- **Port Configuration**: Server runs on port 5000, exposed on port 80

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string for Neon Database
- `NODE_ENV`: Environment flag (development/production)

## Changelog

Changelog:
- June 26, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.