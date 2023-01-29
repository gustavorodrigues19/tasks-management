import express, { Router } from 'express'
import { tasksRoutes } from './tasks'
import { IMethod } from './http-methods'
import { notificationsRoutes } from './notifications'

const router: Router = express.Router()
const routes = [...tasksRoutes, ...notificationsRoutes]

routes.forEach((route) => {
  const methods = Array.isArray(route.method) ? route.method : [route.method]

  methods.forEach((method: IMethod) => {
    if (typeof router[method] !== 'function') return

    router[method](route.endpoint, ...route.middleware)
  })
})

export default router
