import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo} from '../store/todoSlice'
import classes from './TodoItem.module.css'

export const ToDoItem = ({ task, id}) => {
	const dispatch = useDispatch()

	const deleteHandler = () => {
		dispatch(deleteTodo(id))
	}
	return (
		<div >
			<li className={classes.lishki}>
				<p className={classes.p} >{task}</p>
				<button
					style={{ color: 'black', cursor: 'pointer'}}>DONE</button>
				<button
					style={{ color: 'black', cursor: 'pointer'}}
					onClick={deleteHandler}
					id={id}>DELETE</button>
			</li>
		</div>
	)
}

