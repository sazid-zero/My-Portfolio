# Sharif Mahmud - Portfolio

A high-performance, modern developer portfolio built with React 18, TypeScript, and TailwindCSS. This project is optimized for speed and can be deployed entirely serverless.

## 🚀 Live Demo
https://my-portfolio-v42.vercel.app/

## ✨ Features
- **Modern Tech Stack**: React 18 with Vite for lightning-fast development.
- **Dynamic Animations**: Smooth transitions using Framer Motion and GSAP.
- **Serverless Contact Form**: Integrated with [Web3Forms](https://web3forms.com/) for email delivery without a backend.
- **Responsive Design**: Mobile-first approach using TailwindCSS.
- **Project Showcase**: Categorized projects with detailed view pages.
- **Interactive UI**: Custom preloader, scroll-reveal effects, and glassmorphism.

## 🛠️ Tech Stack
- **Frontend**: React 18, TypeScript, Vite
- **Styling**: TailwindCSS, Radix UI (shadcn/ui), Lucide Icons
- **Animations**: Framer Motion, GSAP
- **Routing**: React Router DOM
- **Data Fetching**: TanStack Query (React Query)
- **Forms**: Serverless via Web3Forms API

## 📂 Project Structure
```
├── client/              # React frontend (Vite)
│   ├── src/
│   │   ├── assets/      # Static assets (photos, images)
│   │   ├── components/  # Reusable UI components
│   │   ├── data/        # Project data and constants
│   │   ├── hooks/       # Custom React hooks
│   │   ├── pages/       # Page components (Portfolio, Projects, Details)
│   │   └── App.tsx      # Main application routing
├── shared/              # Shared types and validation schemas
└── api/                 # Utility scripts (e.g., contact form helpers)
```

## ⚙️ Setup & Installation

### Prerequisites
- Node.js (v18 or higher)
- Web3Forms Access Key ([Get it here](https://web3forms.com/))

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root or add to your secrets:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

### Development
Start the development server:
```bash
npm run dev
```

### Production Build
Generate a production-ready build:
```bash
npm run build
```

## 🌐 Deployment
This project is designed for serverless platforms like **Vercel** or **Netlify**.

1. Connect your GitHub repository to Vercel.
2. Add `VITE_WEB3FORMS_ACCESS_KEY` to the environment variables in the Vercel dashboard.
3. Deploy!

## 📄 License
This project is licensed under the MIT License.
