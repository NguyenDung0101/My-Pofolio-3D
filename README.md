# My-Portfolio (React + Vite + Tailwind)

A modern, responsive portfolio website built with React, Vite, TypeScript, and Tailwind CSS. Features a stunning Hero section with avatar, smooth animations using Framer Motion, and dynamic Dark/Light mode with 3D Spline viewer integration.

## ✨ Features

- **Modern Hero Section** with animated avatar and gradient backgrounds
- **Dark/Light Mode Toggle** with conditional Spline 3D viewer
- **Smooth Animations** powered by Framer Motion
- **Responsive Design** optimized for all devices
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **100% Frontend SPA** ready for Vercel deployment

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation & Development

```bash
# Clone the repository
git clone <your-repo-url>
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the portfolio in your browser.

## 🛠️ Build & Deploy

### Build for Production

```bash
# Create production build
npm run build
```

### Deploy on Vercel

1. **Easy Deploy**: Connect your GitHub repository with Vercel
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect the Vite configuration
   - Deploy with one click!

2. **CLI Deploy** (Alternative):
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

The `vercel.json` configuration ensures proper SPA routing support.

## 🎨 Dark/Light Mode & Spline Viewer

The portfolio features conditional rendering based on theme:

### Light Mode
- Displays a minimal spline-viewer with undefined URL
- Clean, bright interface

### Dark Mode  
- Shows interactive 3D Spline scene from `https://prod.spline.design/bkjmn9Q8FuVgwPvK/scene.splinecode`
- Immersive dark theme with 3D background

The spline-viewer script is dynamically loaded based on the current theme for optimal performance.

## 📱 Responsive Design

The Hero section and all components are fully responsive:
- **Mobile**: Optimized layouts and touch interactions
- **Tablet**: Adaptive spacing and typography
- **Desktop**: Full-featured experience with animations

## 🔧 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   ├── HeroSection.tsx # Main hero component with avatar
│   └── ...
├── pages/              # Route components
│   ├── Index.tsx       # Homepage with spline logic
│   └── NotFound.tsx
├── hooks/              # Custom React hooks
├── lib/                # Utilities
└── assets/             # Static assets

public/
├── avatar.png          # Profile avatar image
├── *.pdf              # CV/Resume files
└── ...                 # Other static files
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run preview` - Preview production build locally
- `npm run typecheck` - Run TypeScript checks
- `npm test` - Run tests

## 🎯 Key Technologies

- **React 18** - Modern React with hooks
- **Vite** - Lightning fast build tool
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Spline** - 3D viewer integration
- **Radix UI** - Accessible component primitives

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Nguyễn Tuấn Dũng
