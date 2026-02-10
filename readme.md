# Sharif Mahmud - Portfolio

A high-performance, modern developer portfolio built with React 18, TypeScript, and TailwindCSS. This project features a completely dynamic project management system powered by a serverless backend and Neon Postgres database.

## 🚀 Live Demo
[https://my-portfolio-v42.vercel.app/](https://my-portfolio-v42.vercel.app/)

## ✨ Features
- **Dynamic Project System**: Projects are fetched from a Neon Postgres database, not hardcoded.
- **Admin Dashboard**: A protected `/admin` route to Create, Read, Update, and Delete (CRUD) projects.
- **Markdown Support**: Write full project case studies in Markdown directly from the dashboard.
- **Modern Tech Stack**: React 18, Vite, TypeScript, and TailwindCSS.
- **Dynamic Animations**: Smooth transitions using Framer Motion and GSAP.
- **Serverless Backend**: API routes hosted as Vercel Serverless Functions.
- **Contact Form**: Integrated with [Web3Forms](https://web3forms.com/) for serverless email delivery.
- **Database ORM**: Type-safe database interactions with Drizzle ORM.
- **Responsive Design**: Mobile-first approach using TailwindCSS.

## 🛠️ Tech Stack
### Frontend
- **Framework**: React 18, TypeScript, Vite
- **Styling**: TailwindCSS, Radix UI (shadcn/ui), Lucide Icons
- **Animations**: Framer Motion, GSAP, Lenis (Smooth Scroll)
- **Routing**: React Router DOM (v7)
- **Data Fetching**: TanStack Query (React Query)

### Backend & Database
- **Database**: Neon Postgres (Serverless)
- **ORM**: Drizzle ORM
- **API**: Vercel Serverless Functions (Node.js)
- **Authentication**: Simple Admin Password protection

## 📂 Project Structure
```
├── client/              # React frontend (Vite)
│   ├── src/
│   │   ├── assets/      # Static assets
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Admin & Public pages
│   │   └── App.tsx      # Main application routing
├── api/                 # Vercel Serverless Functions
│   ├── auth/            # Admin login logic
│   └── projects/        # Project CRUD endpoints
├── shared/              # Shared types and Drizzle schema
└── server/              # Local Express server (for dev)
```

## ⚙️ Setup & Installation

### Prerequisites
- Node.js (v18 or higher)
- A [Neon Postgres](https://neon.tech) database project.

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
   Create a `.env` file in the root directory:
   ```env
   # Database Connection (Pooler URL recommended for Serverless)
   DATABASE_URL=postgres://user:pass@ep-project.region.neon.tech/neondb?sslmode=require

   # Admin Authentication
   VITE_ADMIN_PASSWORD=your_secure_password

   # Contact Form (Web3Forms)
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key
   ```

4. Push Database Schema:
   Initialize your database tables using Drizzle Kit:
   ```bash
   npm run db:push
   ```

### Development
Start the development server (runs with local Express backend):
```bash
npm run dev
```

### Production Build
Generate a production-ready build:
```bash
npm run build
```

## 🌐 Deployment
This project is optimized for **Vercel**.

1. **Push to GitHub**: Commit your changes.
2. **Import to Vercel**: Import your repository.
3. **Environment Variables**: Add the following in Vercel Project Settings:
   - `DATABASE_URL` (Use the **Pooled** connection string from Neon)
   - `VITE_ADMIN_PASSWORD`
   - `VITE_WEB3FORMS_ACCESS_KEY`
4. **Deploy**: Vercel will automatically build the frontend and serverless functions.

## 📄 License
This project is licensed under the MIT License.
