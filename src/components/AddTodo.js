import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTodo } from '../store/todoSlice'
import classes from './AddTodo.module.css'

export const AddTodo = () => {
	const [inputValue, setInputValue] = useState('')
	const dispatch = useDispatch()
	const inputChangeHandler = (e) => {
		setInputValue(e.target.value)
	}
	const addTodoHandler = (event) => {
		event.preventDefault()
		if (inputValue.trim().length > 0) {
			dispatch(addNewTodo(inputValue))
		}
		setInputValue('')
	}

	return (
		<div className={classes.form}>
			<input onChange={inputChangeHandler} value={inputValue} />
			<button onClick={addTodoHandler}>Add</button>
		</div>
	)
}


