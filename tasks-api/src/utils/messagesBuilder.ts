import moment from 'moment'
import { ITask } from '../models/task'

export const buildTaskPerformedMessage = (task: ITask) => {
  const performedAt = moment(task.performedAt).format('MMMM Do YYYY, h:mm:ss a')
  return `The tech ${task.name} performed the task ${task.summary} on date ${performedAt}`
}
