import { MessageBroker } from '../../message-broker'
import { IMessageBroker } from '../../message-broker/interface'
import { UsersRepository } from '../../repositories/users'
import { IUserRepository } from '../../repositories/users/interface'
import { ROLES } from '../../utils/constants'
import { INotificationsService } from './interface'

export class NotificationsService implements INotificationsService {
  messageBroker: IMessageBroker
  userRepository: IUserRepository

  constructor() {
    this.messageBroker = new MessageBroker()
    this.userRepository = new UsersRepository()
  }

  async getNotifications(id: number) {
    const user = await this.userRepository.findById(id)
    if (!user) throw new Error('User not exists')
    if (user.role === ROLES.MANAGER) {
      return await this.messageBroker.consumeMessage()
    } else {
      throw new Error('Access denied')
    }
  }
}
