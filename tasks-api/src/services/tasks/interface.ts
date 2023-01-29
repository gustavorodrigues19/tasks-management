import { ITask } from '../../models/task'

export interface ITaskService {
  createTask(summary: string, userId: number): Promise<ITask>
  getAllTasks(userId: number): Promise<ITask[]>
  performTask(id: number): Promise<ITask>
}
