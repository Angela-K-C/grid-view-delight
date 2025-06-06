
import type { Notification } from '@/types/notification';

export const mockNotifications: Notification[] = [
  {
    id: 'N001',
    title: 'Campaign Approved',
    message: 'Your campaign "Feed a Child" has been approved and is now live',
    type: 'approval',
    status: 'unread',
    timestamp: '2 hours ago',
    avatar: '✅',
    sender: 'System'
  },
  {
    id: 'N002',
    title: 'New Comment',
    message: 'John Smith commented on your "Wellness" campaign',
    type: 'comment',
    status: 'unread',
    timestamp: '4 hours ago',
    avatar: '💬',
    sender: 'John Smith'
  },
  {
    id: 'N003',
    title: 'Mention',
    message: 'Sarah mentioned you in "Rescue The Birds" discussion',
    type: 'mention',
    status: 'read',
    timestamp: '1 day ago',
    avatar: '@',
    sender: 'Sarah Johnson'
  },
  {
    id: 'N004',
    title: 'Campaign Update',
    message: 'Build a Shelter campaign reached 75% of its goal',
    type: 'update',
    status: 'read',
    timestamp: '2 days ago',
    avatar: '📊',
    sender: 'Aurora Online'
  },
  {
    id: 'N005',
    title: 'System Update',
    message: 'New features available in the campaign dashboard',
    type: 'system',
    status: 'unread',
    timestamp: '3 days ago',
    avatar: '⚙️',
    sender: 'System'
  },
  {
    id: 'N006',
    title: 'Campaign Rejected',
    message: 'Your campaign "Help an Orphan" needs revision before approval',
    type: 'approval',
    status: 'read',
    timestamp: '5 days ago',
    avatar: '❌',
    sender: 'System'
  },
  {
    id: 'N007',
    title: 'New Follower',
    message: 'Animal Welfare organization started following your campaigns',
    type: 'update',
    status: 'read',
    timestamp: '1 week ago',
    avatar: '👤',
    sender: 'Animal Welfare'
  },
  {
    id: 'N008',
    title: 'Comment Reply',
    message: 'Mike replied to your comment on "Teach a Child"',
    type: 'comment',
    status: 'read',
    timestamp: '1 week ago',
    avatar: '💬',
    sender: 'Mike Davis'
  }
];
