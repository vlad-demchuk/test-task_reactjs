import { api } from '@/lib/api';
import type { ApiResponse } from '@/types/api.types.ts';

import type { User } from '@/features/users/types';

class UserService {
  private readonly baseUrl = '/users';

  getAll(): Promise<ApiResponse<{ users: User[] }>> {
    return api.get<{ users: User[] }>(this.baseUrl);
  }

  getById(id: string): Promise<ApiResponse<User>> {
    return api.get<User>(`${this.baseUrl}/${id}`);
  }
}

export const userService = new UserService();
