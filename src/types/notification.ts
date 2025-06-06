
export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'mention' | 'approval' | 'update' | 'comment' | 'system';
  status: 'read' | 'unread';
  timestamp: string;
  avatar?: string;
  sender?: string;
  actionUrl?: string;
}
