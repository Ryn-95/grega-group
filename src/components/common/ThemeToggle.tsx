import React, { useState, useEffect } from 'react';
import './ThemeToggle.css';

interface ThemeToggleProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  size = 'medium'
}) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark-theme');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark-theme');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      className={`theme-toggle ${size} ${className}`}
      onClick={toggleTheme}
      aria-label={isDark ? 'Passer au thème clair' : 'Passer au thème sombre'}
      title={isDark ? 'Thème clair' : 'Thème sombre'}
    >
      <div className="theme-toggle-track">
        <div className={`theme-toggle-thumb ${isDark ? 'dark' : 'light'}`}>
          {isDark ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          )}
        </div>
      </div>
    </button>
  );
};


