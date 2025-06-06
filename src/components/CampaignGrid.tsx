
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Calendar, Building, Eye } from 'lucide-react';
import type { Campaign } from '@/types/campaign';

interface CampaignGridProps {
  campaigns: Campaign[];
}

const CampaignGrid = ({ campaigns }: CampaignGridProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      case 'approved':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'rejected':
        return 'bg-red-100 text-red-800 hover:bg-red-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {campaigns.map((campaign) => (
        <Card key={campaign.id} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
          <CardContent className="p-4">
            <div className="aspect-video rounded-lg mb-4 overflow-hidden" 
                 style={{ backgroundColor: campaign.color }}>
              <div className="w-full h-full flex items-center justify-center">
                {campaign.icon && (
                  <div className="text-white text-4xl">
                    {campaign.icon}
                  </div>
                )}
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-foreground text-lg leading-tight">
                  {campaign.title}
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <Building className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {campaign.organization}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Badge className={`${getStatusColor(campaign.status)} border-0`}>
                  {campaign.status}
                </Badge>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  {campaign.type}
                </span>
              </div>

              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Start: {campaign.startDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>End: {campaign.endDate}</span>
                </div>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="p-4 pt-0">
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            >
              <Eye className="w-4 h-4 mr-2" />
              View Details
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CampaignGrid;
