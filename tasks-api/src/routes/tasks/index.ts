import { NextFunction, Request, Response } from 'express'
import { ITaskService } from '../../services/tasks/interface'
import { TaskService } from '../../services/tasks'
import { GET, POST, PUT } from '../http-methods'
import { logger } from '../../config/logger'

const GetTasks = {
  method: GET,
  endpoint: '/tasks',
  middleware: [
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        const tasksService: ITaskService = new TaskService()
        const userId = req.headers.user
        const userIdParsed = typeof userId !== 'string' ? 0 : parseInt(userId, 10)
        const tasks = await tasksService.getAllTasks(userIdParsed)

        logger.info({
          description: 'Get all tasks',
          service: 'TaskService',
          result: tasks,
        })

        res.status(200).send(tasks)
      } catch (error) {
        logger.error({
          description: 'Get all tasks',
          service: 'TaskService',
          error,
        })
        next(error)
      }
    },
  ],
}

const CreateTask = {
  method: POST,
  endpoint: '/tasks',
  middleware: [
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        const { summary, userId } = req.body
        const tasksService: ITaskService = new TaskService()
        const tasks = await tasksService.createTask(summary, userId)

        logger.info({
          description: 'Create task',
          service: 'TaskService',
          result: tasks,
        })

        res.status(200).send(tasks)
      } catch (error) {
        logger.error({
          description: 'Create task',
          service: 'TaskService',
          error,
        })
        next(error)
      }
    },
  ],
}

const UpdateTask = {
  method: PUT,
  endpoint: '/tasks/:id',
  middleware: [
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        const { id } = req.params
        const tasksService: ITaskService = new TaskService()
        const idParsed = parseInt(id, 10)
        const tasks = await tasksService.performTask(idParsed)

        logger.info({
          description: 'Update task',
          service: 'TaskService',
          result: tasks,
        })

        res.status(200).send(tasks)
      } catch (error) {
        logger.error({
          description: 'Update task',
          service: 'TaskService',
          error,
        })
        next(error)
      }
    },
  ],
}

export const tasksRoutes = [GetTasks, CreateTask, UpdateTask]
