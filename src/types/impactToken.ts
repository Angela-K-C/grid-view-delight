
export interface ImpactToken {
  id: string;
  title: string;
  creator: string;
  price: number;
  currency: string;
  image: string;
  category: 'art' | 'photography' | 'music' | 'collectible' | 'utility';
  status: 'available' | 'sold' | 'auction';
  likes: number;
  description: string;
  impactScore: number;
  createdAt: string;
  tags: string[];
}
