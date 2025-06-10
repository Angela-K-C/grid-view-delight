
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Heart, ShoppingCart, TrendingUp } from 'lucide-react';
import type { ImpactToken } from '@/types/impactToken';

interface ImpactTokenGridProps {
  tokens: ImpactToken[];
}

const ImpactTokenGrid = ({ tokens }: ImpactTokenGridProps) => {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'art':
        return 'bg-purple-100 text-purple-800 hover:bg-purple-200';
      case 'photography':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      case 'music':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'collectible':
        return 'bg-orange-100 text-orange-800 hover:bg-orange-200';
      case 'utility':
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'sold':
        return 'bg-red-100 text-red-800';
      case 'auction':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {tokens.map((token) => (
        <Card 
          key={token.id} 
          className="group hover:shadow-lg transition-all duration-300 border-border bg-card overflow-hidden"
        >
          <div className="relative">
            <img 
              src={token.image} 
              alt={token.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-3 left-3">
              <Badge className={`${getCategoryColor(token.category)} border-0 text-xs`}>
                {token.category}
              </Badge>
            </div>
            <div className="absolute top-3 right-3">
              <Badge className={`${getStatusColor(token.status)} border-0 text-xs`}>
                {token.status}
              </Badge>
            </div>
            <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded-md text-xs flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              {token.impactScore}
            </div>
          </div>
          
          <CardContent className="p-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-foreground text-sm leading-tight truncate flex-1">
                {token.title}
              </h3>
              <div className="flex items-center gap-1 text-muted-foreground ml-2">
                <Heart className="w-4 h-4" />
                <span className="text-xs">{token.likes}</span>
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground mb-1">
              by {token.creator}
            </p>
            
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {token.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="text-lg font-bold text-foreground">
                {token.price} {token.currency}
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="p-4 pt-0">
            <Button 
              className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              disabled={token.status === 'sold'}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              {token.status === 'sold' ? 'Sold Out' : token.status === 'auction' ? 'Place Bid' : 'Buy Now'}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ImpactTokenGrid;
