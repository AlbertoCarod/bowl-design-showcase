import { Button } from '@/components/ui/button';

interface CollectionCardProps {
  title: string;
  description: string;
  image: string;
  itemCount: number;
}

export const CollectionCard = ({ title, description, image, itemCount }: CollectionCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-card shadow-card hover:shadow-soft transition-smooth border border-warm-neutral">
      {/* Image */}
      <div className="relative h-80 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Overlay Content */}
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold">{title}</h3>
            <span className="text-sm bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
              {itemCount} items
            </span>
          </div>
          <p className="text-white/90 text-sm mb-4">{description}</p>
          <Button variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-text-primary backdrop-blur-sm">
            Explorar
          </Button>
        </div>
      </div>
    </div>
  );
};