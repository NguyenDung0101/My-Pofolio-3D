import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Index';
import NotFound from './pages/NotFound';
import { useScrollAnimation, useParallax } from './hooks/use-scroll-animation';
import './global.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('en');

  // Initialize scroll animations and parallax effects
  useScrollAnimation();
  useParallax();

  useEffect(() => {
    // Initialize theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');

    // Initialize language
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <CustomCursor />
        <Header
          language={language}
          setLanguage={setLanguage}
          theme={theme}
          setTheme={setTheme}
        />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  language={language}
                  theme={theme}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
