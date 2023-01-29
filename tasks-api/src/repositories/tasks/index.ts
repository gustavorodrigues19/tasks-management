import { ResultSetHeader } from 'mysql2'
import { connection } from '../../config/mysql'
import { ITask } from '../../models/task'
import { ITaskRepository } from './interface'
import {
  SQL_TASK_GET_BY_ID,
  SQL_TASK_GET_BY_USER_ID,
  SQL_TASK_INSERT,
  SQL_TASK_SELECT_ALL,
  SQL_TASK_UPDATE,
} from '../../utils/queries'

export class TasksRepository implements ITaskRepository {
  async create(summary: string, userId: number) {
    const [result]: [ResultSetHeader] = await connection.query(SQL_TASK_INSERT, [summary, userId])
    const task: ITask = await this.findById(result.insertId)
    return task
  }

  async findAll() {
    const [tasks]: [ITask[]] = await connection.query(SQL_TASK_SELECT_ALL)
    return tasks
  }

  async findById(id: number) {
    const [task]: [ITask[]] = await connection.query(SQL_TASK_GET_BY_ID, [id])
    return task[0]
  }

  async update(id: number, performedDate: Date) {
    await connection.query(SQL_TASK_UPDATE, [performedDate, id])
    const task: ITask = await this.findById(id)
    return task
  }

  async findAllByUserId(userId: number) {
    const [tasks]: [ITask[]] = await connection.query(SQL_TASK_GET_BY_USER_ID, [userId])
    return tasks
  }
}
