import { MessageBroker } from '../../message-broker'
import { TasksRepository } from '../../repositories/tasks'
import { ITaskRepository } from '../../repositories/tasks/interface'
import { ITaskService } from './interface'

export class TaskService implements ITaskService {
  tasksRepository: ITaskRepository
  messageBroker: any

  constructor() {
    this.tasksRepository = new TasksRepository()
    this.messageBroker = new MessageBroker()
  }

  async createTask(summary: string) {
    await this.messageBroker.create()
    return await this.tasksRepository.create(summary)
  }

  async getAllTasks() {
    return await this.tasksRepository.findAll()
  }
}
