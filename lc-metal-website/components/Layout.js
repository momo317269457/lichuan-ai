import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.body.className = savedTheme === 'light' ? 'light-theme' : 'dark-theme';
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = newTheme === 'light' ? 'light-theme' : 'dark-theme';
  };

  const navItems = [
    { label: '首页', href: '/' },
    { label: '产品中心', href: '/product' },
    { label: '现货库存', href: '/inventory' },
    { label: '物流配送', href: '/logistics' },
    { label: '关于我们', href: '/about' },
  ];

  return (
    <div className="lc-layout">
      <header className="site-header">
        <div className="header-left">
          <div className="logo">
            <span className="logo-text">力川金属</span>
            <span className="logo-sub">LICHUAN METAL</span>
          </div>
        </div>
        
        <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="切换主题">
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
          <button className="cta-button">立即询价</button>
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="菜单"
          >
            <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </header>
      <main>{children}</main>
      

      <footer className="site-footer">© {new Date().getFullYear()} 力川金属有限公司</footer>
    </div>
  );
}
