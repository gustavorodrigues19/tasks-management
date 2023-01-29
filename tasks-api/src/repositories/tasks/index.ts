import { ResultSetHeader } from 'mysql2'
import { connection } from '../../config/mysql'
import { ITask } from '../../models/tasks'
import { ITaskRepository } from './interface'

const SQL_SELECT_ALL = 'SELECT * FROM task'
const SQL_GET_BY_ID = 'SELECT * FROM task WHERE task.id = ?'
const SQL_INSERT = 'INSERT INTO task(summary) values (?)'

export class TasksRepository implements ITaskRepository {
  async create(summary: string) {
    const [result]: [ResultSetHeader] = await connection.query(SQL_INSERT, [summary])
    const [task]: [ITask] = await connection.query(SQL_GET_BY_ID, [result.insertId])
    return task
  }

  async findAll() {
    const [tasks]: [ITask[]] = await connection.query(SQL_SELECT_ALL)
    return tasks
  }
}
