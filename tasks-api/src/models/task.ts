export interface ITask {
  id: number
  summary: string
  performedAt: Date | null
  userId: number
  name: string
  role: string
}
