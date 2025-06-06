
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Clock, Eye, MoreHorizontal } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import type { Notification } from '@/types/notification';

interface NotificationGridProps {
  notifications: Notification[];
}

const NotificationGrid = ({ notifications }: NotificationGridProps) => {
  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'mention':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      case 'approval':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'update':
        return 'bg-purple-100 text-purple-800 hover:bg-purple-200';
      case 'comment':
        return 'bg-orange-100 text-orange-800 hover:bg-orange-200';
      case 'system':
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {notifications.map((notification) => (
        <Card 
          key={notification.id} 
          className={`group hover:shadow-lg transition-all duration-300 border-border bg-card ${
            notification.status === 'unread' ? 'ring-2 ring-primary/20 bg-primary/5' : ''
          }`}
        >
          <CardContent className="p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-lg">
                {notification.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-foreground text-sm leading-tight truncate">
                    {notification.title}
                  </h3>
                  {notification.status === 'unread' && (
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                  {notification.message}
                </p>
                <div className="flex items-center justify-between">
                  <Badge className={`${getTypeColor(notification.type)} border-0 text-xs`}>
                    {notification.type}
                  </Badge>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              <span>{notification.timestamp}</span>
              {notification.sender && (
                <>
                  <span>•</span>
                  <span>{notification.sender}</span>
                </>
              )}
            </div>
          </CardContent>
          
          <CardFooter className="p-4 pt-0 flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            >
              <Eye className="w-4 h-4 mr-2" />
              View
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Mark as Read</DropdownMenuItem>
                <DropdownMenuItem>Archive</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default NotificationGrid;
