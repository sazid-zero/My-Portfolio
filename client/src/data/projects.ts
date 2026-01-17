import axionHero from '@/assets/axion.png';
import coffinity from '@/assets/coffinity.png';
import easybank from '@/assets/easybank.png';
import shopnest from '@/assets/shopnest.png';
import weatherglass from '@/assets/weatherglass.png';
import homesync from '@/assets/homesync.jpeg';

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
  id: 'axion-ai',
  title: 'Axion.AI - Modern SaaS Landing Page',
  description: 'A sleek, responsive, and conversion-focused landing page for an AI-powered SaaS product, featuring smooth animations, engaging visuals, modern UI/UX, and mobile-first design. Perfect as a template or starter for real-world SaaS marketing pages.',
  fullDescription: `# Axion.AI - Modern SaaS Landing Page

A high-performance, frontend-only landing page built for an AI-focused SaaS platform. Designed with clean aesthetics, strong CTAs, smooth scroll animations, and full responsiveness to showcase real-world SaaS marketing pages.

## Features

- **Smooth Scrolling** with Lenis for buttery-smooth user experience
- **Scroll-Triggered Animations** powered by Framer Motion
- **Fully Responsive & Mobile-First** layout that looks great on all devices
- **Modern & Clean Design System** using Tailwind CSS
- **Reusable & Modular Components** for scalable development
- **Type-Safe Development** with React + TypeScript
- **Optimized Performance** with Vite build tool
- **Clear Call-to-Action Sections** optimized for user engagement and conversions

## Tech Stack

- **Frontend**: React, TypeScript
- **Styling & Animations**: Tailwind CSS, Framer Motion
- **Smooth Scroll**: Lenis
- **Build Tool**: Vite
- **Deployment**: Vercel

## Live Demo

Check out the live version here:  
→ https://axion-ai-an-saa-s-landing-page-kd2m.vercel.app/

## Installation & Setup

\`\`\`bash
# Clone the repository
git clone https://github.com/sazid-zero/Axion.AI-An_SaaS_Landing_Page.git

# Navigate into the project
cd Axion.AI-An_SaaS_Landing_Page

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

The app runs at http://localhost:5173

## Project Highlights

- Built with scalability and clean architecture in mind
- Perfect as a template or starter for real AI/SaaS product landing pages
- Focus on UI/UX best practices and performance optimization

Created by **A S M Sharif Mahmud Sazid**`,
  image: axionHero,
  technologies: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Vite', 'Lenis'],
  githubUrl: 'https://github.com/sazid-zero/Axion.AI-An_SaaS_Landing_Page',
  liveUrl: 'https://axion-ai-an-saa-s-landing-page-kd2m.vercel.app/',
  category: 'Landing Page',
  featured: true 
},

 {
  id: 'homesync',
  title: 'HomeSync - Smart Home Dashboard',
  description: 'An interactive, responsive smart home control panel built with React & TypeScript. Monitor real-time stats, toggle devices, adjust temperature/humidity, and track power usage in a modern, dark-mode-ready interface.',
  fullDescription: `# HomeSync - Smart Home Dashboard

An interactive, frontend-only smart home dashboard that gives users a beautiful, centralized interface to control and monitor their connected devices. Features real-time visualizations, intuitive controls, and full responsiveness.

## Features

- Real-time usage stats and temperature charts (using Recharts)
- Dynamic device toggle (on/off switches)
- Customizable temperature dial control
- Humidity and air quality monitoring with adjustable controls
- Occupant listing and per-device power consumption tracking
- Fully responsive design — works beautifully from desktop to mobile
- Clean, modern UI with smooth transitions and animations
- Built-in dark mode support

## Tech Stack

- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Headless UI (for dropdowns and accessible elements)
- **Charts & Visualizations**: Recharts
- **Build Tool**: Vite

**Note**: Currently frontend-only (mock data). Future plans include backend integration (e.g., Firebase) for real-time sync, authentication, and notifications.

## Live Demo

Experience the dashboard live:  
→ https://home-sync-smart-home-dashboard.vercel.app/

## Installation & Setup

\`\`\`bash
# Clone the repository
git clone https://github.com/sazid-zero/HomeSync-Smart-Home-Dashboard.git

# Navigate to the project
cd HomeSync-Smart-Home-Dashboard

# Install dependencies
npm install

# Start the development server
npm run dev
\`\`\`

Open http://localhost:5173 in your browser.

## How to Use

- Toggle any device on/off using the switches on each card
- Adjust room temperature with the interactive dial
- Modify humidity levels via slider or quick presets
- View real-time power consumption and air quality metrics

## Future Improvements (To Do)

- Integrate real backend (Firebase / custom API) for live data
- Add user authentication
- Implement push notifications for smart home alerts

Designed & Developed by **Sharif Mahmud Sazid**`,
  image: homesync,  
  technologies: ['React', 'TypeScript', 'TailwindCSS', 'Recharts', 'Headless UI', 'Vite'],
  githubUrl: 'https://github.com/sazid-zero/HomeSync-Smart-Home-Dashboard',
  liveUrl: 'https://home-sync-smart-home-dashboard.vercel.app/',
  category: 'Dashboard',
  featured: true
 },
  {
  id: 'coffinity',
  title: 'Coffinity - Modern Coffee Shop Landing Page',
  description: 'A high-performance, visually stunning coffee shop landing page with smooth scrolling, GSAP-powered animations, interactive menu, and premium AI-generated 3D coffee assets — built for an elegant, conversion-focused experience.',
  fullDescription: `# Coffinity - Modern Coffee Shop Landing Page

A sleek, high-performance landing page for a premium coffee shop experience. Packed with buttery-smooth interactions, scroll-triggered animations, and a beautifully designed menu section to showcase products.

## Features

- **Smooth Scrolling** — Integrated with **Lenis** for a buttery-smooth, modern scrolling experience
- **Dynamic Animations** — High-performance scroll-triggered effects using **GSAP (ScrollTrigger)** for hero and interactive elements
- **Optimized Assets** — Custom **AI-generated 3D-styled coffee assets** for instant loading and a luxurious feel
- **Modern & Elegant UI** — Built with **Tailwind CSS 4**, featuring responsive layouts, backdrop blurs, and premium typography
- **Interactive Menu** — Category-filtered menu with color-coded pricing, icons, and detailed item modals
- **Fully Responsive** — Looks perfect across desktop, tablet, and mobile devices
- **Performance Optimized** — Animation batching, Intersection Observer, GPU acceleration, lazy loading

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Animations**: GSAP (ScrollTrigger), Framer Motion
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React, React Icons

## Live Demo

Experience Coffinity live:  
→ https://coffinity.vercel.app/

## Installation & Setup

\`\`\`bash
# Clone the repository
git clone https://github.com/sazid-zero/coffinity.git

# Navigate into the project
cd coffinity

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

Open http://localhost:5173 (or the port shown) in your browser.

For production build:
\`\`\`bash
npm run build
\`\`\`

## Project Highlights

- Focus on performance and visual polish — ideal as a template for food/beverage or e-commerce landing pages
- Clean component architecture with reusable elements (Nav, Button, MenuModal, etc.)
- MIT Licensed — free to use, modify, and deploy

Designed & Developed by **Sharif Mahmud Sazid**`,
  image: coffinity,  
  technologies: ['React', 'TypeScript', 'TailwindCSS', 'GSAP', 'Framer Motion', 'Lenis', 'Vite'],
  githubUrl: 'https://github.com/sazid-zero/coffinity',
  liveUrl: 'https://coffinity.vercel.app/',
  category: 'Landing Page',
  featured: true 
},
{  
  id: 'shopnest',
  title: 'ShopNest - Modern E-Commerce Web App',
  description: 'A sleek, frontend-only e-commerce platform built with React & TypeScript. Features product browsing, cart management, wishlist, order history, and smooth animations — all powered by local browser storage for a complete shopping experience without any backend.',
  fullDescription: `# ShopNest - Modern E-Commerce Web App

A high-performance, fully frontend e-commerce application that delivers a realistic shopping experience using only client-side technologies. Data like cart, wishlist, orders, and history persists in the browser via local/session storage — no server required!

## Features

- **Product Catalog** — Browse categorized products with images, details, and filters
- **Shopping Cart** — Add/remove items, update quantities, view totals, and proceed to checkout
- **Wishlist** — Save favorite products for later
- **Order History** — Track past purchases (mocked & stored locally)
- **Local Persistence** — All user data (cart, wishlist, orders, browsing) saved in browser storage
- **Smooth Interactions** — Carousel sliders for featured products
- **Elegant Animations** — Micro-interactions and transitions with Framer Motion
- **Fully Responsive** — Optimized for mobile, tablet, and desktop screens

## Tech Stack

- **Frontend**: React, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (or custom CSS)
- **Animations**: Framer Motion
- **UI Components**: Custom + carousel libraries
- **State Management**: React Hooks + Context API
- **Deployment**: Vercel

**Note**: Pure frontend project — ideal as a starter template, demo, or showcase for advanced React e-commerce UIs.

## Live Demo

Shop live right now:  
→ https://shopnest.vercel.app/

## Installation & Setup

\`\`\`bash
# Clone the repository
git clone https://github.com/sazid-zero/ShopNest-E-Commerce-Web-App.git

# Navigate into the project
cd ShopNest-E-Commerce-Web-App

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

Open http://localhost:5173 (or the port shown).

For production build:
\`\`\`bash
npm run build
\`\`\`

## Project Highlights

- Demonstrates complete e-commerce flow without backend complexity
- Great foundation for adding real API integration later (e.g., Stripe, Firebase)
- Clean, modular code structure with reusable components
- MIT Licensed — free to use, modify, and deploy

Designed & Developed by **Sharif Mahmud Sazid**`,
  image: shopnest, 
  technologies: ['React', 'TypeScript', 'Vite', 'Framer Motion', 'TailwindCSS'],
  githubUrl: 'https://github.com/sazid-zero/ShopNest-E-Commerce-Web-App',
  liveUrl: 'https://shopnest-virid.vercel.app/',
  category: 'E-Commerce',
  featured: false  
},
{
  id: 'easybank',
  title: 'EasyBank - Modern Banking Landing Page',
  description: 'A sleek, responsive banking landing page built with React & TypeScript. Features smooth scroll-triggered animations, modern UI components, gradient effects, and a clean, professional design optimized for conversions and user trust.',
  fullDescription: `# EasyBank - Modern Banking Landing Page

A high-performance, frontend-only landing page for a digital banking platform. Designed with elegance and professionalism in mind, featuring buttery-smooth animations, a fixed navbar, gradient buttons, and fully responsive layouts that build trust and encourage sign-ups.

## Features

- **Smooth Scroll-Triggered Animations** — Powered by Framer Motion for engaging transitions and effects
- **Modern Gradient Buttons & Text Effects** — Eye-catching calls-to-action with hover states
- **Fixed & Responsive Navbar** — Smooth hover interactions and mobile-friendly menu
- **Component-Based Architecture** — Clean, reusable components using shadcn/ui and Radix UI primitives
- **Fully Responsive Design** — Looks polished on desktop, tablet, and mobile devices
- **Lightweight Routing** — Client-side navigation with Wouter
- **Optimized Performance** — Fast loads via Vite and efficient state handling with React Query

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (with custom CSS variables for theming)
- **UI Library**: shadcn/ui + Radix UI primitives
- **Animations**: Framer Motion
- **Routing**: Wouter
- **State Management**: React Query (@tanstack/react-query)
- **Icons**: Lucide React
- **Forms & Utilities**: React Hook Form, date-fns, Embla Carousel, clsx, class-variance-authority

## Live Demo

Experience EasyBank live:  
→ https://easy-bank-react-landing-page.vercel.app/

## Installation & Setup

\`\`\`bash
# Clone the repository
git clone https://github.com/sazid-zero/EasyBank-react-landing-page.git

# Navigate into the project
cd EasyBank-react-landing-page

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

Open http://localhost:5173 (or the port shown) in your browser.

For production build:
\`\`\`bash
npm run build
\`\`\`

## Project Highlights

- Professional fintech aesthetic with focus on trust-building elements (security badges, testimonials, CTAs)
- Excellent showcase of advanced React patterns, animations, and modern component libraries
- Ideal template for financial services, fintech, or SaaS landing pages
- Clean code structure — easy to customize or extend

Designed & Developed by **Sharif Mahmud Sazid**`,
  image: easybank,
  technologies: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'shadcn/ui', 'Vite', 'React Query'],
  githubUrl: 'https://github.com/sazid-zero/EasyBank-react-landing-page',
  liveUrl: 'https://easy-bank-react-landing-page.vercel.app/',
  category: 'Landing Page',
  featured: false
},
{
  id: 'weatherglass',
  title: 'WeatherGlass - Advanced Weather Forecast App',
  description: 'A full-stack, modern weather dashboard with glassmorphism design, real-time data from OpenWeatherMap, 7-day forecasts, multi-language support, geolocation, themes, and persistent storage in PostgreSQL — featuring smooth animations and responsive UI.',
  fullDescription: `# WeatherGlass - Advanced Weather Forecast App

A sophisticated full-stack weather application that delivers accurate, real-time weather information with a beautiful glassmorphism aesthetic. Built with React + TypeScript on the frontend and Express + PostgreSQL on the backend, it supports geolocation auto-detection, city search with suggestions, multi-language internationalization, and data caching/persistence.

## Features

- **Real-time Weather & 7-Day Forecasts** — Current conditions + hourly/daily breakdowns from OpenWeatherMap API
- **Geolocation Auto-Detection** — Automatically fetches weather for user's current location
- **Smart City Search** — Autocomplete suggestions with input validation
- **Multi-Language Support** — 10+ languages (EN, ES, FR, DE, IT, PT, RU, JA, ZH, BN, AR) with RTL layout for Arabic
- **Light/Dark Mode** — Automatic system preference detection
- **Animated UI Components** — Smooth transitions and effects with Framer Motion
- **Data Persistence & Caching** — Stores historical weather/forecast data in PostgreSQL via Drizzle ORM
- **Trend Analysis & Stats** — Weather statistics and visualizations
- **Fully Responsive** — Glassmorphism design that looks stunning on all devices

## Tech Stack

- **Frontend**: React 18 + TypeScript, Vite, Tailwind CSS, Shadcn/UI + Radix UI, Framer Motion, TanStack Query (data fetching/caching), Wouter (routing), react-hook-form
- **Backend**: Node.js + Express.js (TypeScript), Drizzle ORM, PostgreSQL (Neon serverless)
- **APIs**: OpenWeatherMap API
- **Internationalization**: Custom i18n system
- **Deployment**: Vercel (full-stack)

## Live Demo

Check out the live app:  
→ https://weather-glass-weather-forecast-app.vercel.app/

## Installation & Setup

(Note: Full-stack project with separate client/server folders. Requires OpenWeatherMap API key and PostgreSQL/Neon DB setup.)

\`\`\`bash
# Clone the repository
git clone https://github.com/sazid-zero/WeatherGlass-Weather-Forecast-App.git

# Navigate to project root
cd WeatherGlass-Weather-Forecast-App

# Install frontend dependencies
cd client
npm install

# Install backend dependencies (from root or server/)
cd ../server  # or from root if structured differently
npm install

# Set up environment variables (.env files)
# - OPENWEATHER_API_KEY=your_key
# - DATABASE_URL=your_neon_postgres_url

# Run development servers
# Frontend (Vite)
npm run dev  # in client/

# Backend (Express)
npm run dev  # in server/
\`\`\`

## Project Highlights

- Full-stack TypeScript application with modern tooling (Vite, Drizzle, TanStack Query)
- Emphasis on accessibility, performance, and global usability (i18n + RTL)
- Glassmorphism UI + animations for premium feel
- Great foundation for expanding with more weather APIs, user accounts, or notifications
- Clean separation of concerns between client and server

Designed & Developed by **Sharif Mahmud Sazid**`,
  image: weatherglass,
  technologies: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Shadcn/UI', 'TanStack Query', 'Express', 'PostgreSQL', 'Drizzle ORM', 'OpenWeatherMap API'],
  githubUrl: 'https://github.com/sazid-zero/WeatherGlass-Weather-Forecast-App',
  liveUrl: 'https://weather-glass-weather-forecast-app.vercel.app/',
  category: 'Dashboard',
  featured: true
},

];

export const getFeaturedProjects = () => projects.filter(project => project.featured);
export const getAllProjects = () => projects;
export const getProjectById = (id: string) => projects.find(project => project.id === id);
export const getProjectsByCategory = (category: string) => projects.filter(project => project.category === category);
