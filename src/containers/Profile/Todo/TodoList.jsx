import React, {useState} from 'react';
import { useLocation } from 'react-router-dom'

import AddTask from './AddTask.jsx';

const ToDoList = (props) => {
    
    const [currentList, setCurrentList] = useState(['first']);

    const location = useLocation();
    const { date } = location.state;
  

    const updateList = (item) => {
        setCurrentList([...currentList, item.newTask]);
    }
    return (
        <>
            <AddTask updateList={updateList}
                        date={{ date }}/>
            {currentList.map((task) => <li>{task}</li>)}
        </>
    )
}

export default ToDoList;