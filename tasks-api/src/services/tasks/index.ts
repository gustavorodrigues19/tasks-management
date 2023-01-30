import { MessageBroker } from '../../message-broker'
import { IMessageBroker } from '../../message-broker/interface'
import { TasksRepository } from '../../repositories/tasks'
import { ITaskRepository } from '../../repositories/tasks/interface'
import { UsersRepository } from '../../repositories/users'
import { IUserRepository } from '../../repositories/users/interface'
import { ROLES } from '../../utils/constants'
import { buildTaskPerformedMessage } from '../../utils/messagesBuilder'
import { ITaskService } from './interface'

export class TaskService implements ITaskService {
  tasksRepository: ITaskRepository
  userRepository: IUserRepository
  messageBroker: IMessageBroker

  constructor() {
    this.tasksRepository = new TasksRepository()
    this.userRepository = new UsersRepository()
    this.messageBroker = new MessageBroker()
  }

  async createTask(summary: string, userId: number) {
    const user = await this.userRepository.findById(userId)
    if (!user) throw new Error('User does not exists')
    return await this.tasksRepository.create(summary, userId)
  }

  async getAllTasks(userId: number) {
    const user = await this.userRepository.findById(userId)
    if (!user) throw new Error('User not exists')
    if (user.role === ROLES.MANAGER) {
      return await this.tasksRepository.findAll()
    } else {
      return await this.tasksRepository.findAllByUserId(userId)
    }
  }

  async performTask(id: number) {
    const performedDate = new Date()
    const task = await this.tasksRepository.findById(id)
    if (!task) throw new Error('Task does not exists')
    const updatedTask = await this.tasksRepository.update(id, performedDate)
    const message = buildTaskPerformedMessage(task)
    await this.messageBroker.publishMessage(message)
    return updatedTask
  }
}
