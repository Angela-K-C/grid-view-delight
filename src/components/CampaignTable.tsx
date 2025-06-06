
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Eye, MoreHorizontal } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import type { Campaign } from '@/types/campaign';

interface CampaignTableProps {
  campaigns: Campaign[];
}

const CampaignTable = ({ campaigns }: CampaignTableProps) => {
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
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-semibold">Campaign ID</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
            <TableHead className="font-semibold">Organization</TableHead>
            <TableHead className="font-semibold">Type</TableHead>
            <TableHead className="font-semibold">Submission</TableHead>
            <TableHead className="font-semibold">Start Date</TableHead>
            <TableHead className="font-semibold">End Date</TableHead>
            <TableHead className="font-semibold w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {campaigns.map((campaign) => (
            <TableRow key={campaign.id} className="hover:bg-muted/30 transition-colors">
              <TableCell>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-medium"
                    style={{ backgroundColor: campaign.color }}
                  >
                    {campaign.icon || campaign.title.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{campaign.title}</div>
                    <div className="text-sm text-muted-foreground">#{campaign.id}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge className={`${getStatusColor(campaign.status)} border-0`}>
                  {campaign.status}
                </Badge>
              </TableCell>
              <TableCell className="text-foreground">{campaign.organization}</TableCell>
              <TableCell>
                <span className="text-muted-foreground bg-muted px-2 py-1 rounded text-sm">
                  {campaign.type}
                </span>
              </TableCell>
              <TableCell className="text-muted-foreground">{campaign.submissionDate}</TableCell>
              <TableCell className="text-muted-foreground">{campaign.startDate}</TableCell>
              <TableCell className="text-muted-foreground">{campaign.endDate}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CampaignTable;
