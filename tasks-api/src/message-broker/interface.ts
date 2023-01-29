export type IPublishMessage = {
  message: string
}
export interface IMessageBroker {
  consumeMessage(): Promise<IPublishMessage>
  publishMessage(message: string): Promise<void>
}
