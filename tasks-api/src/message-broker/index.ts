/* eslint-disable @typescript-eslint/no-empty-function */
import { connection } from '../config/rabbitMq'
import { Channel, ConsumeMessage } from 'amqplib'

export class MessageBroker {
  async createChannel() {
    const conn = await connection()
    const channel: Channel = await conn.createChannel()

    await channel.assertQueue('myQueue')

    //Send a message to the queue
    channel.sendToQueue('myQueue', Buffer.from('message'))
  }

  async create() {
    const conn = await connection()
    const channel: Channel = await conn.createChannel()

    // Makes the queue available to the client
    await channel.assertQueue('myQueue')
    channel.sendToQueue('myQueue', Buffer.from('message'))
    const consumer =
      (channel: Channel) =>
      (msg: ConsumeMessage | null): void => {
        if (msg) {
          // console.log(msg.content.toString())
          channel.ack(msg)
        }
      }
    // Start the consumer
    await channel.consume('myQueue', consumer(channel))
  }
}
