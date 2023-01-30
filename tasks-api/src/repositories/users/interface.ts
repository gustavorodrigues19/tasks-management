import { IUser } from '../../models/user'

export interface IUserRepository {
  findById(id: number): Promise<IUser | undefined>
}
