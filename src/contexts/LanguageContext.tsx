import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navbar
    'nav.home': 'Home',
    'nav.products': 'Productos',
    'nav.collections': 'Colecciones',
    'nav.cta': 'Comprar ahora',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': 'Bowl Collection',
    'hero.subtitle': 'Explora nuestra colección de bowls que combina estilo y practicidad, perfectos para cualquier mesa.',
    'hero.cta': 'Explorar Colección',
    
    // Products
    'products.title': 'Nuestra Colección',
    'products.subtitle': 'Descubre bowls elegantes que transforman cada comida en una experiencia especial',
    'products.viewDetails': 'Ver detalles',
    'products.specialOffer': 'Oferta especial de fin de semana',
    'products.discount': '15% descuento',
    
    // Collections
    'collections.title': 'Colecciones Destacadas',
    'collections.subtitle': 'Cada colección está cuidadosamente curada para diferentes estilos de vida',
    'collections.minimalist': 'Minimalista',
    'collections.minimalistDesc': 'Diseños limpios y funcionales para el hogar moderno',
    'collections.colorful': 'Coloridos',
    'collections.colorfulDesc': 'Vibrantes tonos que alegran cualquier mesa',
    'collections.classic': 'Clásicos',
    'collections.classicDesc': 'Elegancia atemporal para todas las ocasiones',
    
    // Features
    'features.foodGrade': 'Grado alimentario',
    'features.microwaveSafe': 'Apto microondas',
    'features.ovenSafe': 'Apto horno',
    'features.dishwasherSafe': 'Apto lavavajillas',
    
    // Materials
    'materials.ceramic': 'Cerámica',
    'materials.stainless': 'Acero inoxidable',
    'materials.wood': 'Madera',
    
    // Footer
    'footer.contact': 'Contacto',
    'footer.phone': '+34 900 123 456',
    'footer.email': 'hola@bowlcollection.com',
    'footer.address': 'Madrid, España',
    'footer.navigation': 'Navegación',
    'footer.followUs': 'Síguenos',
    'footer.copyright': '© 2024 Bowl Collection. Todos los derechos reservados.',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.collections': 'Collections',
    'nav.cta': 'Shop now',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Bowl Collection',
    'hero.subtitle': 'Explore our elegant bowls that blend style and practicality, perfect for enhancing any dining experience.',
    'hero.cta': 'Explore Collection',
    
    // Products
    'products.title': 'Our Collection',
    'products.subtitle': 'Discover elegant bowls that transform every meal into a special experience',
    'products.viewDetails': 'View details',
    'products.specialOffer': 'Special weekend offer',
    'products.discount': '15% off',
    
    // Collections
    'collections.title': 'Featured Collections',
    'collections.subtitle': 'Each collection is carefully curated for different lifestyles',
    'collections.minimalist': 'Minimalist',
    'collections.minimalistDesc': 'Clean and functional designs for the modern home',
    'collections.colorful': 'Colorful',
    'collections.colorfulDesc': 'Vibrant tones that brighten any table',
    'collections.classic': 'Classic',
    'collections.classicDesc': 'Timeless elegance for all occasions',
    
    // Features
    'features.foodGrade': 'Food grade',
    'features.microwaveSafe': 'Microwave safe',
    'features.ovenSafe': 'Oven safe',
    'features.dishwasherSafe': 'Dishwasher safe',
    
    // Materials
    'materials.ceramic': 'Ceramic',
    'materials.stainless': 'Stainless',
    'materials.wood': 'Wood',
    
    // Footer
    'footer.contact': 'Contact',
    'footer.phone': '+34 900 123 456',
    'footer.email': 'hello@bowlcollection.com',
    'footer.address': 'Madrid, Spain',
    'footer.navigation': 'Navigation',
    'footer.followUs': 'Follow us',
    'footer.copyright': '© 2024 Bowl Collection. All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};