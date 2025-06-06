
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Eye, MoreHorizontal, Clock } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import type { Notification } from '@/types/notification';

interface NotificationTableProps {
  notifications: Notification[];
}

const NotificationTable = ({ notifications }: NotificationTableProps) => {
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
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-semibold">Notification</TableHead>
            <TableHead className="font-semibold">Type</TableHead>
            <TableHead className="font-semibold">Sender</TableHead>
            <TableHead className="font-semibold">Time</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
            <TableHead className="font-semibold w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {notifications.map((notification) => (
            <TableRow 
              key={notification.id} 
              className={`hover:bg-muted/30 transition-colors ${
                notification.status === 'unread' ? 'bg-primary/5' : ''
              }`}
            >
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-lg">
                    {notification.avatar}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <div className="font-medium text-foreground">{notification.title}</div>
                      {notification.status === 'unread' && (
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground line-clamp-1">
                      {notification.message}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge className={`${getTypeColor(notification.type)} border-0`}>
                  {notification.type}
                </Badge>
              </TableCell>
              <TableCell className="text-foreground">{notification.sender}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{notification.timestamp}</span>
                </div>
              </TableCell>
              <TableCell>
                <span className={`text-sm px-2 py-1 rounded ${
                  notification.status === 'unread' 
                    ? 'bg-primary/10 text-primary' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {notification.status}
                </span>
              </TableCell>
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
                      Mark as Read
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Archive
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

export default NotificationTable;
