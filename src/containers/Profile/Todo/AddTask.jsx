import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


const AddTask = (props) => {
    // newTask = {date: 'whatever the task is'}
    const [newTask, setNewTask] = useState({});
    const [newTaskDate, setNewTaskDate] = useState('');

   const handleReset = () => {
        document.getElementById("myInput").value = "";
   }
    const addNew = (newTask) => {
        console.log("??props:", props)

        // setNewTask(newTask)
        setNewTask({
            ...newTask,
            [props.date]: {newTask}
          });
        props.updateList(newTask)
        setNewTaskDate(props.date);
        handleReset();
        console.log("newTask$$$after", newTask)

    }

    return (
        <>
            <label>
                <input type="text" 
                        name="task" 
                        onChange={((e) => {setNewTask(e.target.value)})} 
                        placeholder="Add new task"
                        id="myInput"/>
            </label>
            <Button onClick={() => {addNew({newTask})}}>Add</Button>
            
        </>
    )
}

export default AddTask;