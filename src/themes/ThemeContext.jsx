import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  default: {
    primary: '#3b82f6',
    secondary: '#1e293b',
    accent: '#10b981',
    background: '#ffffff',
    text: '#0f172a',
    radius: '0.75rem',
  },
  realEstate: {
    primary: '#0f172a',
    secondary: '#1e293b',
    accent: '#c5a059',
    background: '#ffffff',
    text: '#1e293b',
    radius: '0.5rem',
  },
  aiStartup: {
    primary: '#8b5cf6',
    secondary: '#1e1b4b',
    accent: '#ec4899',
    background: '#030014',
    text: '#ffffff',
    radius: '1rem',
  },
  construction: {
    primary: '#f59e0b',
    secondary: '#27272a',
    accent: '#ef4444',
    background: '#ffffff',
    text: '#18181b',
    radius: '0.25rem',
  },
  restaurant: {
    primary: '#e11d48',
    secondary: '#451a03',
    accent: '#fbbf24',
    background: '#fffaf3',
    text: '#451a03',
    radius: '1.5rem',
  },
  healthcare: {
    primary: '#0891b2',
    secondary: '#164e63',
    accent: '#22c55e',
    background: '#f0f9ff',
    text: '#083344',
    radius: '0.5rem',
  },
  sports: {
    primary: '#ea580c',
    secondary: '#111827',
    accent: '#2563eb',
    background: '#ffffff',
    text: '#111827',
    radius: '0.375rem',
  },
  ecommerce: {
    primary: '#db2777',
    secondary: '#111827',
    accent: '#4f46e5',
    background: '#ffffff',
    text: '#111827',
    radius: '0.5rem',
  },
  cakeShop: {
    primary: '#d946ef',
    secondary: '#701a75',
    accent: '#f43f5e',
    background: '#fdf4ff',
    text: '#4a044e',
    radius: '1.25rem',
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('default');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = themes[currentTheme] || themes.default;
    const root = document.documentElement;
    
    root.style.setProperty('--color-primary', theme.primary);
    root.style.setProperty('--color-secondary', theme.secondary);
    root.style.setProperty('--color-accent', theme.accent);
    root.style.setProperty('--color-background', theme.background);
    root.style.setProperty('--color-text', theme.text);
    root.style.setProperty('--radius-theme', theme.radius);

    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [currentTheme, isDarkMode]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme, isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
