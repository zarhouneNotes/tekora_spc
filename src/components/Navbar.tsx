import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n, languages } from '@/context/i18n';
import { Button } from './Button';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import logo from "../images/logo.png"
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const { language, setLanguage, t } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile()
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/entreprise', label: t.nav.company },
    { href: '/produits', label: t.nav.products },
    { href: '/certifications', label: t.nav.certifications },
    { href: '/blog', label: t.nav.blog },
    { href: '/contact', label: t.nav.contact },
  ];

  const isActive = (path: string) => location.pathname === path;

  const currentLang = languages.find(l => l.code === language);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            {/* <div className={`w-10 h-10 flex items-center justify-center ${isScrolled ? 'bg-primary' : 'bg-primary-foreground'}`}>
              <span className={`font-poppins font-bold text-lg ${isScrolled ? 'text-primary-foreground' : 'text-primary'}`}>T</span>
            </div>
            <span className={`ml-3 font-poppins font-semibold text-xl tracking-tight ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
              TEKORA
            </span> */}

            <img src={logo} alt="" width={isMobile ? "150px" : "200px"} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-poppins font-light text-sm tracking-wide transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-secondary'
                    : isScrolled 
                      ? 'text-foreground hover:text-secondary'
                      : 'text-primary-foreground hover:text-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`flex items-center space-x-1 transition-colors duration-200 ${
                    isScrolled ? 'text-foreground hover:text-secondary' : 'text-primary-foreground hover:text-secondary'
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  <span className="font-poppins font-light text-sm uppercase">{language}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[120px]">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className={`cursor-pointer ${language === lang.code ? 'bg-muted' : ''}`}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button */}
            <Link to="/contact">
              <Button variant="solid" size="sm">
                {t.nav.quote}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`block px-4 py-3 font-poppins font-light text-base transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-secondary bg-muted'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 py-3 flex items-center justify-between border-t border-border mt-2 pt-4">
                <button
                  onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                  className="flex items-center space-x-2 text-foreground"
                >
                  <Globe className="w-4 h-4" />
                  <span className="font-poppins font-light text-sm uppercase">{language}</span>
                </button>
                <Link to="/contact">
                  <Button variant="solid" size="sm">
                    {t.nav.quote}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;