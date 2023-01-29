import { NextFunction, Request, Response } from 'express'
import { GET } from '../http-methods'
import { logger } from '../../config/logger'
import { NotificationsService } from '../../services/notifications'
import { INotificationsService } from '../../services/notifications/interface'

const GetNotifications = {
  method: GET,
  endpoint: '/notifications',
  middleware: [
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        const notificationsService: INotificationsService = new NotificationsService()
        const userId = req.headers.user
        const userIdParsed = typeof userId !== 'string' ? 0 : parseInt(userId, 10)
        const tasks = await notificationsService.getNotifications(userIdParsed)

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

export const notificationsRoutes = [GetNotifications]
