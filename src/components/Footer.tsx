import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-warm-beige border-t border-warm-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-text-primary">
              Bowl<span className="text-sage">.</span>
            </h3>
            <p className="text-text-secondary text-sm">
              Elegancia minimalista para tu mesa
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-text-primary">{t('footer.navigation')}</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-text-secondary hover:text-sage transition-smooth text-sm">
                {t('nav.home')}
              </a>
              <a href="#products" className="block text-text-secondary hover:text-sage transition-smooth text-sm">
                {t('nav.products')}
              </a>
              <a href="#collections" className="block text-text-secondary hover:text-sage transition-smooth text-sm">
                {t('nav.collections')}
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-text-primary">{t('footer.contact')}</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <Phone className="h-4 w-4" />
                {t('footer.phone')}
              </div>
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <Mail className="h-4 w-4" />
                {t('footer.email')}
              </div>
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <MapPin className="h-4 w-4" />
                {t('footer.address')}
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-text-primary">{t('footer.followUs')}</h4>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-8 h-8 bg-sage-light text-sage rounded-full flex items-center justify-center hover:bg-sage hover:text-white transition-smooth"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-sage-light text-sage rounded-full flex items-center justify-center hover:bg-sage hover:text-white transition-smooth"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-sage-light text-sage rounded-full flex items-center justify-center hover:bg-sage hover:text-white transition-smooth"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-warm-neutral mt-8 pt-8 text-center">
          <p className="text-text-secondary text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};