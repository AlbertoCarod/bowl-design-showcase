import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-warm-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-text-primary">
              Bowl<span className="text-sage">.</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-text-primary hover:text-sage transition-smooth font-medium">
              {t('nav.home')}
            </a>
            <a href="#products" className="text-text-primary hover:text-sage transition-smooth font-medium">
              {t('nav.products')}
            </a>
            <a href="#collections" className="text-text-primary hover:text-sage transition-smooth font-medium">
              {t('nav.collections')}
            </a>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-text-secondary hover:text-sage"
            >
              <Globe className="h-4 w-4 mr-1" />
              {language.toUpperCase()}
            </Button>
            <Button variant="hero" size="default">
              {t('nav.cta')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-warm-neutral">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#home"
              className="block px-3 py-2 text-text-primary hover:text-sage hover:bg-warm-beige rounded-md transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.home')}
            </a>
            <a
              href="#products"
              className="block px-3 py-2 text-text-primary hover:text-sage hover:bg-warm-beige rounded-md transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.products')}
            </a>
            <a
              href="#collections"
              className="block px-3 py-2 text-text-primary hover:text-sage hover:bg-warm-beige rounded-md transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.collections')}
            </a>
            <div className="px-3 py-2 flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="text-text-secondary hover:text-sage"
              >
                <Globe className="h-4 w-4 mr-1" />
                {language.toUpperCase()}
              </Button>
              <Button variant="hero" size="sm">
                {t('nav.cta')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};