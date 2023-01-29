export interface IMessageBroker {
  consumeMessage(): Promise<string>
  publishMessage(message: string): Promise<void>
}
