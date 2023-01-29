import { ITask } from '../../models/tasks'

export interface ITaskRepository {
  create(summary: string): Promise<ITask>
  findAll(): Promise<ITask[]>
}
