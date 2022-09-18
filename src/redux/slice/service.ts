import { $api } from '../../shared'
import { TUsers } from './entities'

export const userService = {
  getUsers: async () => $api.get<TUsers[]>('/users'),
  getSearchUsers: async (query: string) =>
    $api.get<TUsers[]>(`/users?q=${query}`),
}
