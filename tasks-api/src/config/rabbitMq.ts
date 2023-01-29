import client, { Connection } from 'amqplib'

export const connection = async (): Promise<Connection> => {
  return await client.connect('amqp://guest:guest@amqp/')
}
