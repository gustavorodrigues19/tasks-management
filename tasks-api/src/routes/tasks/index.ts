import { Request, Response } from 'express'
import { ITaskService } from '../../services/tasks/interface'
import { TaskService } from '../../services/tasks'
import { GET, POST } from '../http-methods'
import { logger } from '../../config/logger'

const GetTasks = {
  method: GET,
  endpoint: '/tasks',
  middleware: [
    async (req: Request, res: Response): Promise<void> => {
      const tasksService: ITaskService = new TaskService()
      const tasks = await tasksService.getAllTasks()
      logger.info({
        description: 'Get all tasks',
        service: 'TaskService',
      })
      res.status(200).send(tasks)
    },
  ],
}

const CreateTask = {
  method: POST,
  endpoint: '/tasks',
  middleware: [
    async (req: Request, res: Response): Promise<void> => {
      const { summary } = req.body
      const tasksService: ITaskService = new TaskService()
      const tasks = await tasksService.createTask(summary)
      logger.info({
        description: 'Create task',
        service: 'TaskService',
      })

      res.status(200).send(tasks)
    },
  ],
}

export const tasksRoutes = [GetTasks, CreateTask]
