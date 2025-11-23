'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDarkMode } from '@/context/DarkModeContext';

interface NavLink {
  id: string;
  label: string;
  path: string;
}

interface NavbarProps {
  activeSection: string;
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const { isDarkMode } = useDarkMode();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks: NavLink[] = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'services', label: 'Services', path: '/services' },
    { id: 'packages', label: 'Packages', path: '/packages' },
    { id: 'branches', label: 'Branches', path: '/branches' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];
  
  // Helper function to check if link is active
  const isActiveLink = (linkPath: string) => {
    if (linkPath === '/') {
      return pathname === '/';
    }
    return pathname === linkPath;
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''} ${isDarkMode ? 'dark-mode' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container nav-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            Alpha Medi Lab
          </Link>
        </motion.div>
        
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.id}
              href={link.path}
              className={isActiveLink(link.path) ? 'active' : ''}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
              {isActiveLink(link.path) && (
                <motion.div 
                  className="link-indicator"
                  layoutId="indicator"
                  transition={{ type: 'spring', duration: 0.5 }}
                />
              )}
            </Link>
          ))}
        </div>
        
        <div 
          className="hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;