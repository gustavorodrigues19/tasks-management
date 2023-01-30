/* eslint-disable no-console */
import { TaskService } from '.'
import { expect } from 'chai'
import sinon from 'sinon'
import { UsersRepository } from '../../repositories/users'
import { ROLES } from '../../utils/constants'
import { TasksRepository } from '../../repositories/tasks'

describe('TasksServices', () => {
  afterEach(() => {
    sinon.restore()
  })

  describe('Create task', () => {
    it('should not create a task, because user does not exists', async () => {
      const userRepository = sinon.stub(UsersRepository.prototype, 'findById').resolves(undefined)
      try {
        const taskService = new TaskService()
        await taskService.createTask('task 1', 1)
      } catch (error) {
        expect(userRepository.calledOnce).to.be.true
        expect(error).to.be.ok
        const { message }: any = error
        expect(message).to.include('User does not exists')
      }
    })
    it('should create a task properly', async () => {
      const user = { id: 1, name: 'John', role: ROLES.MANAGER }
      const task = {
        id: 1,
        summary: 'Task 1',
        performedAt: null,
        userId: 1,
        name: 'John',
        role: ROLES.MANAGER,
      }
      const userRepository = sinon.stub(UsersRepository.prototype, 'findById').resolves(user)
      const taskRepository = sinon.stub(TasksRepository.prototype, 'create').resolves(task)
      const taskService = new TaskService()
      const response = await taskService.createTask('task 1', 1)

      expect(userRepository.calledOnce).to.be.true
      expect(taskRepository.calledOnce).to.be.true
      expect(response).to.be.equal(task)
    })
  })
})
