export interface User {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar?: string;
  job?: string;
}

export interface PaginatedUsers {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

export interface Snackbar {
  show: boolean;
  message: string;
  color: string;
}
