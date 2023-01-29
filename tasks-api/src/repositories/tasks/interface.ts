import { ITask } from '../../models/task'

export interface ITaskRepository {
  create(summary: string, userId: number): Promise<ITask>
  findAll(): Promise<ITask[]>
  findById(id: number): Promise<ITask | undefined>
  findAllByUserId(userId: number): Promise<ITask[]>
  update(id: number, performedAt: Date): Promise<ITask>
}
