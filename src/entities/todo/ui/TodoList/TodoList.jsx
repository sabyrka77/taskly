import { memo, useContext } from 'react'
import TodoItem from '../TodoItem'
import { TasksContext } from '../../model/TasksContext'

const TodoList = ({ styles }) => {
  const { tasks, filteredTasks } = useContext(TasksContext)

  const hasTasks = tasks.length > 0
  const isFilteredTasksEmpty = filteredTasks?.length === 0

  if (!hasTasks) {
    return <div className="todo__empty-message">There are no tasks yet</div>
  }

  if (hasTasks && isFilteredTasksEmpty) {
    return <div className="todo__empty-message">Tasks not found</div>
  }

  return (
    <ul className={styles.list}>
      {(filteredTasks ?? tasks).map((task) => (
        <TodoItem
          className={styles.item}
          key={task.id}
          {...task}
        />
      ))}
    </ul>
  )
}

export default memo(TodoList)