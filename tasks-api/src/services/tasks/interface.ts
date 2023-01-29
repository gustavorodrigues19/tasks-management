import { ITask } from '../../models/tasks'

export interface ITaskService {
  createTask(summary: string): Promise<ITask>
  getAllTasks(): Promise<ITask[]>
}
