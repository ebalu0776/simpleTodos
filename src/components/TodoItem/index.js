import {Component} from 'react'

const TodoItem = props => {
  const {todoList, onDelete} = props
  const {title, id} = todoList

  deleteButton = () => {
    onDelete(id)
  }
  return (
    <div>
      <li className="card-list-container">
        <p className="paragraph">{title}</p>
        <button type="button" className="btn btn-danger" onClick={deleteButton}>
          Delete
        </button>
      </li>
    </div>
  )
}
export default TodoItem
