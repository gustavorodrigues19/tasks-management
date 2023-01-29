import { IPublishMessage } from '../../message-broker/interface'

export interface INotificationsService {
  getNotifications(id: number): Promise<IPublishMessage>
}
