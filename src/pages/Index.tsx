import { Navbar } from '@/components/Navbar';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Star, Award, Truck } from 'lucide-react';

// Import images
import heroImage from '@/assets/hero-bowl.jpg';
import bowlBlue from '@/assets/bowl-blue.jpg';
import bowlCream from '@/assets/bowl-cream.jpg';
import bowlOrange from '@/assets/bowl-orange.jpg';
import bowlWood from '@/assets/bowl-wood.jpg';
import bowlSteel from '@/assets/bowl-steel.jpg';
import collectionMinimalist from '@/assets/collection-minimalist.jpg';
import collectionColorful from '@/assets/collection-colorful.jpg';
import collectionClassic from '@/assets/collection-classic.jpg';

const Index = () => {
  const { t } = useLanguage();

  const products = [
    {
      name: "Sage Bowl Set",
      price: 24.99,
      originalPrice: 29.99,
      image: heroImage,
      features: ['foodGrade', 'microwaveSafe', 'ovenSafe'],
      materials: ['ceramic'],
      description: "Elegante conjunto de bowls con interior sage y exterior crema, perfectos para cualquier ocasión.",
      isSpecial: true
    },
    {
      name: "Ocean Bowl Collection",
      price: 19.99,
      image: bowlBlue,
      features: ['foodGrade', 'microwaveSafe'],
      materials: ['ceramic'],
      description: "Diseño minimalista en tonos azul océano que aporta serenidad a tu mesa."
    },
    {
      name: "Cream Classic Set",
      price: 22.99,
      image: bowlCream,
      features: ['foodGrade', 'microwaveSafe', 'ovenSafe'],
      materials: ['ceramic'],
      description: "Tonos neutros y elegantes que combinan con cualquier vajilla y decoración."
    },
    {
      name: "Sunset Orange Bowl",
      price: 18.99,
      image: bowlOrange,
      features: ['foodGrade', 'microwaveSafe'],
      materials: ['ceramic'],
      description: "Vibrante color naranja que añade energía y calidez a tus comidas."
    },
    {
      name: "Natural Wood Collection",
      price: 34.99,
      image: bowlWood,
      features: ['foodGrade'],
      materials: ['wood'],
      description: "Bowls de madera natural sostenible, únicos por su veta natural."
    },
    {
      name: "Steel Professional Set",
      price: 27.99,
      image: bowlSteel,
      features: ['foodGrade', 'microwaveSafe', 'ovenSafe'],
      materials: ['stainless'],
      description: "Acero inoxidable premium para uso profesional y doméstico."
    }
  ];

  const collections = [
    {
      title: t('collections.minimalist'),
      description: t('collections.minimalistDesc'),
      image: collectionMinimalist,
      itemCount: 8
    },
    {
      title: t('collections.colorful'),
      description: t('collections.colorfulDesc'),
      image: collectionColorful,
      itemCount: 12
    },
    {
      title: t('collections.classic'),
      description: t('collections.classicDesc'),
      image: collectionClassic,
      itemCount: 6
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-warm-beige to-sage-light opacity-90"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-text-primary leading-tight">
                  Bowl
                  <span className="block text-text-secondary font-light">Collection</span>
                </h1>
                <p className="text-xl text-text-secondary max-w-md leading-relaxed">
                  {t('hero.subtitle')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" className="group">
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="minimal" size="xl">
                  {t('nav.contact')}
                </Button>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-6 pt-8">
                <div className="flex items-center gap-2 text-text-secondary">
                  <Star className="h-5 w-5 text-sage" />
                  <span className="text-sm font-medium">Premium Quality</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <Award className="h-5 w-5 text-sage" />
                  <span className="text-sm font-medium">Handcrafted</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <Truck className="h-5 w-5 text-sage" />
                  <span className="text-sm font-medium">Free Shipping</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={heroImage} 
                  alt="Bowl Collection Hero"
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-soft"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute top-8 -right-8 w-32 h-32 bg-sage-light rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent rounded-full opacity-30 blur-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary">
              {t('products.title')}
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              {t('products.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-20 bg-warm-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary">
              {t('collections.title')}
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              {t('collections.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <CollectionCard key={index} {...collection} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;