import { TasksRepository } from '../../repositories/tasks'
import { ITaskRepository } from '../../repositories/tasks/interface'
import { ITaskService } from './interface'

export class TaskService implements ITaskService {
  tasksRepository: ITaskRepository

  constructor() {
    this.tasksRepository = new TasksRepository()
  }

  async createTask(summary: string) {
    return await this.tasksRepository.create(summary)
  }

  async getAllTasks() {
    return await this.tasksRepository.findAll()
  }
}
