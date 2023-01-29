/// Tasks
export const SQL_TASK_SELECT_ALL = 'SELECT * FROM task'
export const SQL_TASK_GET_BY_ID =
  'SELECT * FROM task AS t LEFT JOIN user as u ON t.userId = u.id WHERE t.id = ?'
export const SQL_TASK_GET_BY_USER_ID = 'SELECT * FROM task WHERE task.userId = ?'
export const SQL_TASK_INSERT = 'INSERT INTO task(summary, userId) values (?, ?)'
export const SQL_TASK_UPDATE = 'UPDATE task SET performedAt = ? WHERE id = ?'

// Users
export const SQL_USER_GET_BY_ID = 'SELECT * FROM user WHERE user.id = ?'
