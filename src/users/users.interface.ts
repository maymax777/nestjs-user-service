import { User } from './entities/user.entity';

export interface PaginatedUserResponse {
  users: User[];
  total: number;
  cursor: number;
  limit: number;
}
