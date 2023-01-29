/* eslint-disable @typescript-eslint/no-empty-function */
import { connection } from '../config/rabbitMq'
import { Channel, ConsumeMessage } from 'amqplib'
import { IMessageBroker } from './interface'

export class MessageBroker implements IMessageBroker {
  async publishMessage(message: string) {
    const conn = await connection()
    const channel: Channel = await conn.createChannel()

    // Makes the queue available to the client
    await channel.assertQueue('managerQueue', { durable: true })
    channel.sendToQueue('managerQueue', Buffer.from(message), {
      persistent: true,
    })
  }

  async consumeMessage() {
    let message = ''
    const consumer = (msg: ConsumeMessage | null): void => {
      if (msg) {
        const secs = msg.content.toString().split('.').length - 1
        // Display the received message
        message = msg.content.toString()
        setTimeout(() => {}, secs * 1000)
      }
    }

    const conn = await connection()
    const channel: Channel = await conn.createChannel()
    await channel.assertQueue('managerQueue', { durable: true })
    await channel.consume('managerQueue', consumer, {
      // automatic acknowledgment mode,
      noAck: true,
    })
    const notificationMessage = { message }
    return notificationMessage
  }
}
