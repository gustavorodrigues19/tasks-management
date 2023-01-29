import { connection } from '../config/rabbitMq'
import { Channel, ConsumeMessage } from 'amqplib'
import { IMessageBroker } from './interface'

export class MessageBroker implements IMessageBroker {
  async publishMessage(message: string) {
    const conn = await connection()
    const channel: Channel = await conn.createChannel()

    // Makes the queue available to the client
    await channel.assertQueue('managerQueue')
    channel.sendToQueue('managerQueue', Buffer.from(message))
    channel.close()
  }

  async consumeMessage() {
    const conn = await connection()
    const channel: Channel = await conn.createChannel()
    let message = ''
    const consumer =
      (channel: Channel) =>
      (msg: ConsumeMessage | null): void => {
        if (msg) {
          channel.ack(msg)
          message = msg.content.toString()
        }
      }
    await channel.consume('myQueue', consumer(channel))
    channel.close()
    return message
  }
}
