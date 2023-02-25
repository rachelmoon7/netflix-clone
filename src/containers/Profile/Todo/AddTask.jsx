import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


const AddTask = (props) => {
    const [newTask, setNewTask] = useState('');
    const [newTaskDate, setNewTaskDate] = useState('');

   
    const addNew = (newTask) => {
        console.log("newTask$$$", newTask)
        setNewTask(newTask)
        props.updateList(newTask)
        setNewTaskDate(props.date);
    }
    return (
        <>
            <label>
                <input type="text" 
                        name="task" 
                        onChange={((e) => {setNewTask(e.target.value)})} 
                        placeholder="Add new task"/>
            </label>
            <Button onClick={() => {addNew({newTask})}}>Add</Button>
            
        </>
    )
}

export default AddTask;