import axionHero from '@/assets/axion.png';
import coffinity from '@/assets/coffinity.png';
import easybank from '@/assets/easybank.png';
import shopnest from '@/assets/shopnest.png';
import weatherglass from '@/assets/weatherglass.png';
import homesync from '@/assets/homesync.jpeg';
import cripterdex from '@/assets/cripterdex.png';
import consultbook from '@/assets/consultbook.png';
import sustresearchhub from '@/assets/sustresearchhub.jpeg';

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
  id: 'sust-research-hub',
  title: 'SUST Research Hub - Academic Research Ecosystem',
  description: 'A comprehensive digital platform for managing the entire lifecycle of academic research. It integrates repositories for theses, student projects, and published papers, while providing dedicated access to research datasets and machine learning models.',
  fullDescription: `# SUST Research Hub - Academic Research Ecosystem

**A production-grade digital ecosystem for managing, discovering, and publishing academic research. Built with modern web technologies for the Shahjalal University of Science and Technology.**

## Platform Overview

SUST Research Hub is a unified digital platform that goes beyond a simple thesis repository. It serves as a central hub for the entire academic research lifecycle, aggregating **Theses**, **Student Projects**, **Published Papers**, **Datasets**, and **Machine Learning Models**. This ecosystem enables seamless collaboration between researchers, supervisors, and the global academic community.

### Key Achievements

- **2000+ Theses & Projects** catalogued with complete metadata
- **500+ Publications** with cross-indexed authors
- **Dedicated Reservoirs** for Datasets and ML Models
- **150+ Active Users** across student, supervisor, and admin roles
- **99.9% Uptime** with redundant infrastructure
- **<500ms** average page load time
- **WCAG 2.1 AA** accessibility compliance

## Core Features

### 1. Comprehensive Research Repository
- **Multi-Type Archiving**: Dedicated repositories for Theses, Project Reports, and Published Research Papers.
- **Research Artifacts**: Specialized storage and discovery for Datasets and Model checkpoints (weights/code).
- **Unified Discovery**: Cross-references between papers, the projects they spawned from, and the datasets they used.

### 2. User Management & Authentication
- **Registration & Approval Workflow**: Multi-role registration (Student, Supervisor, Admin) with admin approval queue.
- **User Roles & Permissions**: Distinct capabilities for students, supervisors, and admins.

### 3. Submission & Workflow System
- **Advanced Submission Pipelines**: Tailored workflows for submitting theses, uploading project code, or archiving datasets.
- **Review & Approval**: Structured feedback loops, revision requests, and version control for all submission types.

### 3. Publication & Research Papers System

- **Academic Publications Management**: Link theses to published papers, track venues and citations.
- **Discovery**: Full-text search and related papers discovery.

### 4. Discovery & Search System

- **Intelligent Search Engine**: Full-text search with facets, auto-complete, and relevance ranking.
- **Browse & Filter**: Browse by discipline, year, department, and more.

### 5. Team Collaboration Features
- **Team Formation**: Create research teams and invite collaborators for group projects.
- **Asset Management**: Secure high-capacity upload for large datasets and model files via Cloudinary integration.

## Technology Stack

### Frontend
- **React 19.2**
- **Next.js 16**
- **TypeScript 5.0**
- **Tailwind CSS v4**
- **shadcn/ui**
- **React Query**

### Backend
- **Next.js Server Actions**
- **PostgreSQL (Neon/Supabase)**
- **Prisma ORM**

### Infrastructure
- **Cloudinary** (Storage)
- **Vercel Blob**
- **CloudFlare CDN**

## System Architecture

The platform follows a modern tiered architecture:
- **Presentation Layer**: React 19 Components + Next.js UI
- **Application Layer**: Server Components & Actions
- **Business Logic Layer**: Asset Management, Reviews, etc.
- **Data Access Layer**: Prisma ORM, Caching
- **Persistence Layer**: PostgreSQL, Cloudinary

## Security & Compliance

- **Authentication**: Bcrypt hashing, JWT tokens
- **Data Protection**: TLS 1.3, AES-256 encryption
- **Compliance**: GDPR, CCPA, Academic Standards (IEEE, ACM)
`,
  image: sustresearchhub,
  technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma', 'PostgreSQL', 'TailwindCSS', 'Cloudinary'],
  githubUrl: 'https://github.com/sust/research-hub',
  liveUrl: 'https://sust-research-hub.vercel.app/',
  category: 'Web App',
  featured: true
},
  {
  id: 'consultbook',
  title: 'ConsultBook - Expert Consultation Platform',
  description: 'A comprehensive Knowledge Commerce Marketplace bridging experts and knowledge seekers. Features 1:1 video consultations, live masterclasses, and digital product monetization.',
  fullDescription: `# ConsultBook - The Ultimate Expert Consultation Platform

**ConsultBook** is a next-generation SaaS platform designed to bridge the gap between experts and knowledge seekers. It serves as a comprehensive **Knowledge Commerce Marketplace**, allowing professionals to monetize their expertise through 1:1 consultations, live masterclasses, and digital products.

Built with **Next.js 15**, **TypeScript**, and **Drizzle ORM**, ConsultBook offers a seamless, high-performance experience with real-time capabilities. It solves the fragmentation in the consultation industry by unifying scheduling, video conferencing, payments, and community management into a single, elegant ecosystem.

## Key Features

### 1. **Expert Marketplace & Discovery**
- **Advanced Search Engine**: Real-time filtering by specialty, location, price, and mode (video/in-person) using a custom optimized search algorithm.
- **Dynamic Profile Pages**: Rich consultant profiles showcasing bios, qualifications, cover photos, and verified reviews.
- **Global Command Center**: A \`Cmd+K\` power search interface for instant navigation across the entire platform.

### 2. **Comprehensive Booking System**
- **Smart Scheduling**: Integrated calendar management with timezone support, allowing consultants to define custom availability slots.
- **Multi-Mode Appointments**: Support for Video, Audio, and In-Person consultation bookings.
- **Workflow Automation**: Automated email notifications and status updates (Pending -> Confirmed -> Completed) for both parties.

### 3. **Live Workshops & Masterclasses**
- **Event Management**: Consultants can create, publish, and monetize live group sessions.
- **Ticketing System**: Seamless seat reservation and capacity management for workshops.
- **Digital Asset Delivery**: Automated distribution of workshop materials and resources to attendees.

### 4. **Real-Time Communication Hub**
- **Integrated Messaging**: A full-featured chat system allowing pre-booking inquiries and post-session follow-ups.
- **File Sharing**: Secure sharing of documents, resources, and session notes directly within the chat.
- **Instant Notifications**: Real-time alerts for new messages, booking requests, and session reminders.

### 5. **Robust Payment Infrastructure** (Powered by Stripe)
- **Secure Transactions**: End-to-end encrypted payment processing for appointments and digital products.
- **Wallet System**: Integrated digital wallet for tracking earnings, refunds, and transaction history.
- **Automated Payouts**: Streamlined withdrawal process for consultants to receive their earnings directly.
- **Multi-Currency Support**: Built to handle international transactions seamlessley.

### 6. **Dual-Role Dashboards**
- **Client Dashboard**: A personalized hub for tracking upcoming sessions, purchase history, and favorite consultants.
- **Consultant Workspace**: A professional suite for managing bookings, analyzing earnings, creating workshops, and editing public profiles.

## Technology Stack

This project leverages the bleeding edge of the React ecosystem to ensure scalability and performance.

- **Core Framework**: Next.js 15 (App Router), React 19 (RC)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS, Shadcn UI, Framer Motion (Animations)
- **Database & ORM**: PostgreSQL (Neon DB Serverless), Drizzle ORM
- **Authentication**: Firebase Auth (Custom Integration)
- **State Management**: React Hooks, Context API, Server Actions
- **Real-Time**: Server-Sent Events (SSE) / Polling for Updates
- **Forms & Validation**: React Hook Form, Zod

## Technical Challenges Solved

### **1. Handling Complex Scheduling Logic**
Designing a database schema and UI that handles custom availability across different timezones was non-trivial. I implemented a robust \`consultant_schedules\` table and overlapping time-slot validation logic to ensure zero double-bookings.

### **2. Performance Optimization with Server Actions**
To ensure lightning-fast page loads, I heavily utilized Next.js Server Components and Server Actions. This reduced the client-side bundle size significantly and moved complex logic (like booking calculations and database mutations) to the edge.

### **3. Unified Search Experience**
Implementing the "Global Search" required harmonizing data from multiple disparate sources (Consultants, Workshops, Products). I built a unified search indexer that aggregates these entities and serves them through a high-performance filtering UI.
`,
  image: consultbook,
  technologies: ['Next.js 15', 'TypeScript', 'TailwindCSS', 'Drizzle ORM', 'Stripe', 'Shadcn UI', 'Framer Motion', 'Firebase'],
  githubUrl: 'https://github.com/sazid-zero/ConsultBook',
  liveUrl: 'https://consultbook.vercel.app/',
  category: 'SaaS',
  featured: true
},
  {
  id: 'cripterdex',
  title: 'CripterDex - Crypto Dashboard & Market Intel',
  description: 'A professional-grade cryptocurrency dashboard and market intelligence platform designed for traders. Offers real-time data tracking, news aggregation, and portfolio management in a sleek interface.',
  fullDescription: `# CripterDex - Crypto Dashboard & Market Intel

**CripterDex** is a professional-grade cryptocurrency dashboard and market intelligence platform designed for traders, investors, and enthusiasts. Built with modern web technologies, it offers real-time data tracking, news aggregation, and portfolio management in a sleek, responsive interface.

## Features

- **Real-Time Market Data**: Live tracking of thousands of cryptocurrencies with 60-second auto-updates.
- **Advanced Charting**: Interactive price history charts (1D, 7D, 30D, 1Y).
- **Global News Aggregator**: Curated crypto news feed to stay ahead of market trends.
- **Watchlist Management**: Personalized portfolio tracking and favorites list.
- **Deep Market Analysis**:
  - Top Gainers & Losers
  - Trending Coins
  - Volume & Market Cap metrics
- **Responsive Design**: Seamless experience across Desktop, Tablet, and Mobile devices.
- **Progressive Web App (PWA)**: Installable application support.

## Integrations & APIs

- **CoinGecko API**: Powering the real-time market data.
- **CryptoCompare API**: Delivers the global news feed.
- **Lenis**: Buttery smooth scrolling interactions.
- **Lucide Icons**: Beautiful, consistent vector icons.
- **Vercel Analytics**: Privacy-friendly real-time traffic insights.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui (Radix UI)
- **Charts**: Recharts
- **State Management**: Zustand
`,
  image: cripterdex,
  technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'shadcn/ui', 'Recharts', 'Zustand'],
  githubUrl: 'https://github.com/sazid-zero/CripterDex',
  liveUrl: 'https://cripterdex.vercel.app/',
  category: 'Dashboard',
  featured: true
},
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

(Note: Full-stack project with separate client/server folders. Requires OpenWeatherMap API key and PostgreSQL/Neon DB setup.)

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
  featured: false
},

];

export const getFeaturedProjects = () => projects.filter(project => project.featured);
export const getAllProjects = () => projects;
export const getProjectById = (id: string) => projects.find(project => project.id === id);
export const getProjectsByCategory = (category: string) => projects.filter(project => project.category === category);
