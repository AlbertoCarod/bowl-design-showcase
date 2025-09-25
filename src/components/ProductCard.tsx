import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Microwave, Flame, Sparkles } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  features: string[];
  materials: string[];
  description: string;
  isSpecial?: boolean;
}

export const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  features, 
  materials, 
  description, 
  isSpecial = false 
}: ProductCardProps) => {
  const { t } = useLanguage();

  const getFeatureIcon = (feature: string) => {
    switch (feature) {
      case 'microwaveSafe':
        return <Microwave className="h-3 w-3" />;
      case 'ovenSafe':
        return <Flame className="h-3 w-3" />;
      case 'foodGrade':
        return <Check className="h-3 w-3" />;
      default:
        return <Sparkles className="h-3 w-3" />;
    }
  };

  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-soft transition-smooth border border-warm-neutral">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
        />
        {isSpecial && (
          <div className="absolute top-4 left-4">
            <div className="bg-sage text-white px-3 py-1 rounded-full text-xs font-medium">
              {t('products.specialOffer')}
            </div>
            <div className="bg-accent text-white px-2 py-1 rounded-full text-xs font-bold mt-1">
              {t('products.discount')}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-3">
          {features.map((feature) => (
            <Badge 
              key={feature} 
              variant="secondary" 
              className="bg-sage-light text-sage text-xs flex items-center gap-1"
            >
              {getFeatureIcon(feature)}
              {t(`features.${feature}`)}
            </Badge>
          ))}
        </div>

        {/* Name */}
        <h3 className="text-lg font-semibold text-text-primary mb-2">{name}</h3>

        {/* Description */}
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">{description}</p>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-text-primary">${price}</span>
          {originalPrice && (
            <span className="text-sm text-text-light line-through">${originalPrice}</span>
          )}
        </div>

        {/* Materials */}
        <div className="flex flex-wrap gap-2 mb-4">
          {materials.map((material) => (
            <span 
              key={material}
              className="inline-flex items-center text-xs text-text-secondary bg-warm-beige px-2 py-1 rounded-full"
            >
              •&nbsp;{t(`materials.${material}`)}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Button variant="minimal" className="w-full">
          {t('products.viewDetails')}
        </Button>
      </div>
    </div>
  );
};