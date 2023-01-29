import { RowDataPacket } from 'mysql2'

export interface ITask extends RowDataPacket {
  id: number
  summary: string
  performedAt: Date | null
}
