
export interface Campaign {
  id: string;
  title: string;
  organization: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  type: 'Open' | 'Closed';
  submissionDate: string;
  startDate: string;
  endDate: string;
  color: string;
  icon?: string;
}
