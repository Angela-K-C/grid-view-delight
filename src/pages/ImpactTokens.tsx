
import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Filter, Grid3X3, List, SlidersHorizontal } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import ImpactTokenGrid from '@/components/ImpactTokenGrid';
import { mockImpactTokens } from '@/data/mockImpactTokens';

const ImpactTokens = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [priceFilter, setPriceFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const categories = ['all', 'art', 'photography', 'music', 'collectible', 'utility'];
  const statuses = ['all', 'available', 'sold', 'auction'];
  const priceRanges = ['all', '0-1', '1-3', '3-5', '5+'];

  const filteredTokens = useMemo(() => {
    return mockImpactTokens.filter(token => {
      const matchesSearch = token.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          token.creator.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          token.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || token.category === selectedCategory;
      const matchesStatus = selectedStatus === 'all' || token.status === selectedStatus;
      
      let matchesPrice = true;
      if (priceFilter !== 'all') {
        const price = token.price;
        switch (priceFilter) {
          case '0-1':
            matchesPrice = price >= 0 && price <= 1;
            break;
          case '1-3':
            matchesPrice = price > 1 && price <= 3;
            break;
          case '3-5':
            matchesPrice = price > 3 && price <= 5;
            break;
          case '5+':
            matchesPrice = price > 5;
            break;
        }
      }
      
      return matchesSearch && matchesCategory && matchesStatus && matchesPrice;
    });
  }, [searchTerm, selectedCategory, selectedStatus, priceFilter]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Impact Token Marketplace</h1>
          <p className="text-muted-foreground">
            Discover and collect impact-driven NFTs that make a difference
          </p>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search tokens, creators..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Filters */}
                <div className="flex gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Category
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {categories.map((category) => (
                        <DropdownMenuItem
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        <SlidersHorizontal className="w-4 h-4 mr-2" />
                        Status
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {statuses.map((status) => (
                        <DropdownMenuItem
                          key={status}
                          onClick={() => setSelectedStatus(status)}
                        >
                          {status === 'all' ? 'All Status' : status.charAt(0).toUpperCase() + status.slice(1)}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        Price Range
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {priceRanges.map((range) => (
                        <DropdownMenuItem
                          key={range}
                          onClick={() => setPriceFilter(range)}
                        >
                          {range === 'all' ? 'All Prices' : `${range} ETH`}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              {/* View Toggle */}
              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'table' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('table')}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Active Filters */}
            {(selectedCategory !== 'all' || selectedStatus !== 'all' || priceFilter !== 'all' || searchTerm) && (
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
                {searchTerm && (
                  <Badge variant="secondary" className="gap-1">
                    Search: {searchTerm}
                    <button onClick={() => setSearchTerm('')} className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5">
                      ×
                    </button>
                  </Badge>
                )}
                {selectedCategory !== 'all' && (
                  <Badge variant="secondary" className="gap-1">
                    Category: {selectedCategory}
                    <button onClick={() => setSelectedCategory('all')} className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5">
                      ×
                    </button>
                  </Badge>
                )}
                {selectedStatus !== 'all' && (
                  <Badge variant="secondary" className="gap-1">
                    Status: {selectedStatus}
                    <button onClick={() => setSelectedStatus('all')} className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5">
                      ×
                    </button>
                  </Badge>
                )}
                {priceFilter !== 'all' && (
                  <Badge variant="secondary" className="gap-1">
                    Price: {priceFilter} ETH
                    <button onClick={() => setPriceFilter('all')} className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5">
                      ×
                    </button>
                  </Badge>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredTokens.length} of {mockImpactTokens.length} impact tokens
          </p>
        </div>

        {/* Content */}
        {viewMode === 'grid' ? (
          <ImpactTokenGrid tokens={filteredTokens} />
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            Table view coming soon...
          </div>
        )}

        {/* No Results */}
        {filteredTokens.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No impact tokens found matching your criteria</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedStatus('all');
                setPriceFilter('all');
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImpactTokens;
