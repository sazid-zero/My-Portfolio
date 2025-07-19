
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
    id: 'shopsphere',
    title: 'ShopSphere - E-Commerce Platform',
    description: 'A modern e-commerce platform with advanced filtering, real-time inventory, and seamless checkout experience. Built with React.js and integrated payment processing.',
    fullDescription: `# ShopSphere - E-Commerce Platform

A comprehensive e-commerce solution built with modern web technologies, providing users with a seamless shopping experience.

## Features

- **Advanced Product Filtering**: Multi-level filtering by category, price, brand, and ratings
- **Real-time Inventory Management**: Live stock updates and availability tracking
- **Secure Payment Processing**: Integrated with Stripe for secure transactions
- **User Authentication**: JWT-based authentication with social login options
- **Responsive Design**: Mobile-first design approach for all devices
- **Admin Dashboard**: Complete admin panel for product and order management

## Tech Stack

- **Frontend**: React.js, TypeScript, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Payment**: Stripe API
- **Authentication**: JWT, Google OAuth
- **Hosting**: Vercel (Frontend), Railway (Backend)

## Installation

\`\`\`bash
git clone https://github.com/yourusername/shopsphere
cd shopsphere
npm install
npm run dev
\`\`\`

## Environment Variables

\`\`\`
MONGODB_URI=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
\`\`\``,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    technologies: ['React', 'TailwindCSS', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'E-Commerce',
    featured: true
  },
  {
    id: 'taskflow',
    title: 'TaskFlow - Project Management',
    description: 'Collaborative task management with real-time updates, drag-and-drop functionality, and team collaboration features. Inspired by modern productivity tools.',
    fullDescription: `# TaskFlow - Project Management Tool

A powerful project management application designed for teams to collaborate effectively and track project progress in real-time.

## Key Features

- **Drag & Drop Interface**: Intuitive Kanban boards with smooth drag-and-drop functionality
- **Real-time Collaboration**: Live updates using WebSocket connections
- **Team Management**: User roles, permissions, and team organization
- **Time Tracking**: Built-in time tracking for tasks and projects
- **File Attachments**: Upload and manage project files
- **Notifications**: Real-time notifications for task updates and mentions

## Architecture

- **Frontend**: React.js with TypeScript for type safety
- **State Management**: Redux Toolkit for complex state management
- **Real-time**: Socket.io for live collaboration features
- **Backend**: Node.js with Express.js REST API
- **Database**: PostgreSQL with Prisma ORM
- **File Storage**: AWS S3 for file attachments

## Getting Started

\`\`\`bash
# Clone the repository
git clone https://github.com/yourusername/taskflow
cd taskflow

# Install dependencies
npm install

# Setup database
npx prisma migrate dev

# Start development server
npm run dev
\`\`\``,
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    technologies: ['React', 'TypeScript', 'Firebase', 'Socket.io', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'Productivity',
    featured: true
  },
  {
    id: 'weathervue',
    title: 'WeatherVue - Smart Dashboard',
    description: 'Intelligent weather dashboard with location-based forecasts, interactive charts, and beautiful animations that reflect current weather conditions.',
    fullDescription: `# WeatherVue - Smart Weather Dashboard

An intelligent weather application that provides comprehensive weather information with beautiful visualizations and animations.

## Features

- **Location-based Forecasts**: Automatic location detection with manual search capability
- **Interactive Charts**: Beautiful weather data visualization using Chart.js
- **Animated Weather Icons**: Dynamic icons that change based on weather conditions
- **7-day Forecast**: Extended weather predictions with hourly breakdowns
- **Weather Alerts**: Push notifications for severe weather conditions
- **Offline Support**: PWA with offline caching for last viewed locations

## APIs Used

- **OpenWeatherMap API**: Primary weather data source
- **Geolocation API**: Browser location detection
- **Mapbox API**: Location search and mapping

## Technical Implementation

- **Frontend Framework**: Vue.js 3 with Composition API
- **State Management**: Pinia for reactive state management
- **Charts**: Chart.js for weather data visualization
- **Animations**: CSS3 and Vue transitions
- **PWA**: Service workers for offline functionality
- **Build Tool**: Vite for fast development and building

## Setup

\`\`\`bash
npm install
npm run dev
\`\`\`

## API Keys Required

- OpenWeatherMap API key
- Mapbox access token`,
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    technologies: ['Vue.js', 'Weather API', 'Chart.js', 'PWA'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'Dashboard',
    featured: true
  },
  {
    id: 'socialpulse',
    title: 'SocialPulse - Analytics Dashboard',
    description: 'Comprehensive social media analytics platform with real-time data visualization, engagement tracking, and automated reporting features.',
    fullDescription: `# SocialPulse - Social Media Analytics

A comprehensive analytics platform for social media managers to track, analyze, and optimize their social media performance across multiple platforms.

## Core Features

- **Multi-Platform Integration**: Connect Instagram, Twitter, Facebook, LinkedIn
- **Real-time Analytics**: Live data streaming and visualization
- **Engagement Tracking**: Monitor likes, comments, shares, and reach
- **Automated Reporting**: Generate PDF reports with insights
- **Content Scheduling**: Plan and schedule posts across platforms
- **Competitor Analysis**: Track competitor performance and trends

## Data Visualization

- **Interactive Dashboards**: D3.js powered charts and graphs
- **Custom Metrics**: Create custom KPIs and tracking metrics
- **Export Options**: CSV, PDF, and JSON data export
- **Historical Data**: Track performance trends over time

## Technology Stack

- **Frontend**: React.js with TypeScript
- **Data Visualization**: D3.js and Recharts
- **Backend**: Express.js with Node.js
- **Database**: MongoDB for analytics data
- **Authentication**: OAuth integration with social platforms
- **Scheduling**: Node-cron for automated tasks

## Installation

\`\`\`bash
git clone https://github.com/yourusername/socialpulse
cd socialpulse
npm install
npm run build
npm start
\`\`\``,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    technologies: ['React', 'D3.js', 'Express', 'MongoDB', 'OAuth'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'Analytics',
    featured: true
  },
  {
    id: 'cryptotracker',
    title: 'CryptoTracker - Investment Portfolio',
    description: 'Real-time cryptocurrency portfolio tracker with advanced analytics, price alerts, and market insights for informed trading decisions.',
    fullDescription: `# CryptoTracker - Investment Portfolio

A sophisticated cryptocurrency portfolio management application with real-time price tracking, advanced analytics, and trading insights.

## Features

- **Real-time Price Tracking**: Live cryptocurrency prices and market data
- **Portfolio Management**: Track holdings, profits, and losses
- **Price Alerts**: Custom alerts for price movements
- **Market Analysis**: Technical indicators and chart analysis
- **News Integration**: Latest crypto news and market updates
- **Tax Reporting**: Generate reports for tax purposes

## Market Data

- **CoinGecko API**: Comprehensive cryptocurrency data
- **WebSocket Connections**: Real-time price updates
- **Historical Data**: Price charts and historical analysis
- **Market Metrics**: Market cap, volume, and price changes

## Tech Stack

- **Frontend**: Next.js with TypeScript
- **Styling**: TailwindCSS with Headless UI
- **Charts**: TradingView widgets and Chart.js
- **State**: Zustand for state management
- **API**: CoinGecko and CryptoCompare APIs
- **Database**: Supabase for user data`,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Supabase'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'Finance',
    featured: false
  },
  {
    id: 'recipeai',
    title: 'RecipeAI - Smart Cooking Assistant',
    description: 'AI-powered recipe recommendation system that suggests personalized recipes based on available ingredients and dietary preferences.',
    fullDescription: `# RecipeAI - Smart Cooking Assistant

An intelligent cooking assistant that uses AI to recommend recipes based on your available ingredients, dietary restrictions, and personal preferences.

## AI Features

- **Ingredient Recognition**: Camera-based ingredient detection
- **Recipe Generation**: AI-powered recipe creation
- **Nutrition Analysis**: Detailed nutritional information
- **Dietary Preferences**: Vegan, keto, gluten-free options
- **Smart Substitutions**: Ingredient substitution suggestions
- **Cooking Timer**: Integrated cooking timers and steps

## Technology

- **AI/ML**: OpenAI GPT-4 for recipe generation
- **Computer Vision**: TensorFlow.js for ingredient recognition
- **Frontend**: React Native for mobile app
- **Backend**: Python Flask with ML models
- **Database**: PostgreSQL for recipe storage
- **APIs**: Spoonacular API for recipe data

## Mobile Features

- **Camera Integration**: Take photos of ingredients
- **Voice Commands**: Voice-controlled cooking assistant
- **Offline Mode**: Download recipes for offline cooking
- **Shopping Lists**: Generate shopping lists from recipes
- **Social Sharing**: Share recipes with friends`,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    technologies: ['React Native', 'Python', 'TensorFlow', 'OpenAI', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'AI/ML',
    featured: false
  },
  {
    id: 'gamestore',
    title: 'GameStore - Digital Marketplace',
    description: 'Modern digital game marketplace with user reviews, wishlists, and secure payment processing for indie and AAA game developers.',
    fullDescription: `# GameStore - Digital Game Marketplace

A comprehensive digital marketplace for game developers to sell their games and for gamers to discover, purchase, and manage their game libraries.

## Platform Features

- **Game Library**: Personal game collection management
- **User Reviews**: Community-driven game reviews and ratings
- **Wishlist System**: Save games for later purchase
- **Digital Downloads**: Secure game download and installation
- **Developer Dashboard**: Analytics and sales tracking for developers
- **Community Features**: Forums, discussions, and user profiles

## E-commerce

- **Secure Payments**: Stripe integration for payments
- **Regional Pricing**: Currency conversion and regional pricing
- **Refund System**: Automated refund processing
- **Sales & Discounts**: Promotional campaigns and discounts
- **Gift System**: Send games as gifts to friends

## Technical Architecture

- **Frontend**: Vue.js 3 with Nuxt.js for SSR
- **Backend**: Node.js with Express and GraphQL
- **Database**: MongoDB for product data, Redis for caching
- **File Storage**: AWS S3 for game files and assets
- **CDN**: CloudFront for global content delivery
- **Security**: JWT authentication with rate limiting`,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    technologies: ['Vue.js', 'Nuxt.js', 'GraphQL', 'MongoDB', 'AWS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'E-Commerce',
    featured: false
  },
  {
    id: 'fitnesstracker',
    title: 'FitnessTracker - Health & Wellness',
    description: 'Comprehensive fitness tracking application with workout plans, nutrition tracking, and progress analytics for health-conscious users.',
    fullDescription: `# FitnessTracker - Health & Wellness Platform

A complete fitness and health tracking application designed to help users achieve their fitness goals through comprehensive tracking and personalized recommendations.

## Health Features

- **Workout Tracking**: Log exercises, sets, reps, and weights
- **Nutrition Logging**: Track calories, macros, and meal planning
- **Progress Analytics**: Visual progress charts and statistics
- **Goal Setting**: Set and track fitness goals
- **Workout Plans**: Pre-built and custom workout routines
- **Integration**: Connect with fitness wearables and apps

## Personalization

- **AI Recommendations**: Personalized workout and nutrition suggestions
- **Progress Photos**: Before/after photo comparisons
- **Social Features**: Share progress with friends and community
- **Challenges**: Fitness challenges and leaderboards
- **Coach Integration**: Connect with personal trainers

## Technology Stack

- **Mobile App**: React Native for cross-platform mobile
- **Web Dashboard**: React.js for detailed analytics
- **Backend**: Node.js with Express.js
- **Database**: PostgreSQL for user data
- **Analytics**: Custom analytics engine
- **Integrations**: Apple Health, Google Fit, Fitbit APIs`,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    technologies: ['React Native', 'React', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'Health',
    featured: false
  }
];

export const getFeaturedProjects = () => projects.filter(project => project.featured);
export const getAllProjects = () => projects;
export const getProjectById = (id: string) => projects.find(project => project.id === id);
export const getProjectsByCategory = (category: string) => projects.filter(project => project.category === category);
