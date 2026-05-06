const API = 'http://localhost:3000/tasks'

const headers = {
  'Content-Type': 'application/json',
}

const tasksAPI = {
  getAll: () => {
    return fetch(API).then((response) => response.json())
  },

  add: (task) => {
    return fetch(API, {
      method: 'POST',
      headers,
      body: JSON.stringify(task),
    }).then((response) => response.json())
  },

  delete: (id) => {
    return fetch(`${API}/${id}`, { method: 'DELETE' })
  },

  deleteAll: (tasks) => {
    return Promise.all(
      tasks.map(({ id }) => tasksAPI.delete(id)),
    )
  },

  toggleComplete: (id, isDone) => {
    return fetch(`${API}/${id}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({ isDone }),
    })
  },
}

export default tasksAPI