
import React, { useState } from 'react';
import { Search, Filter, Grid3X3, RowsIcon, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CampaignGrid from '@/components/CampaignGrid';
import CampaignTable from '@/components/CampaignTable';
import { mockCampaigns } from '@/data/mockData';

const Index = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('table');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [organizationFilter, setOrganizationFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  const filteredCampaigns = mockCampaigns.filter(campaign => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         campaign.organization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || campaign.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesOrg = organizationFilter === 'all' || campaign.organization === organizationFilter;
    const matchesType = typeFilter === 'all' || campaign.type.toLowerCase() === typeFilter.toLowerCase();
    
    return matchesSearch && matchesStatus && matchesOrg && matchesType;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-foreground">Approval Requests</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Manage and review campaign approval requests
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                <Plus className="w-4 h-4 mr-2" />
                New Request
              </Button>
              <div className="flex items-center border border-border rounded-lg p-1 bg-muted">
                <Button
                  variant={viewMode === 'table' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('table')}
                  className="h-8 w-8 p-0"
                >
                  <RowsIcon className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="h-8 w-8 p-0"
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="container mx-auto px-6 py-4">
        <Tabs defaultValue="campaigns" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="brands">Brands</TabsTrigger>
            <TabsTrigger value="causes">Causes</TabsTrigger>
          </TabsList>

          <TabsContent value="campaigns" className="mt-6">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search for campaigns..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Select value={organizationFilter} onValueChange={setOrganizationFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Organization" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Organizations</SelectItem>
                    <SelectItem value="Aurora Online">Aurora Online</SelectItem>
                    <SelectItem value="Positive Vibes">Positive Vibes</SelectItem>
                    <SelectItem value="Animal Welfare">Animal Welfare</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Content */}
            {viewMode === 'grid' ? (
              <CampaignGrid campaigns={filteredCampaigns} />
            ) : (
              <CampaignTable campaigns={filteredCampaigns} />
            )}
          </TabsContent>

          <TabsContent value="brands" className="mt-6">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Brands view coming soon...</p>
            </div>
          </TabsContent>

          <TabsContent value="causes" className="mt-6">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Causes view coming soon...</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
