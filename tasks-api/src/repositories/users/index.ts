import { connection } from '../../config/mysql'
import { IUser } from '../../models/user'
import { SQL_USER_GET_BY_ID } from '../../utils/queries'
import { IUserRepository } from './interface'

export class UsersRepository implements IUserRepository {
  async findById(id: number) {
    const [tasks]: [IUser[] | any] = await connection.query(SQL_USER_GET_BY_ID, [id])
    return tasks[0]
  }
}
