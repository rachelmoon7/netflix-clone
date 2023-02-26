import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom'
import { isSameDay } from 'date-fns';

import AddTask from './AddTask.jsx';

const ToDoList = (props) => {
    const [currentList, setCurrentList] = useState([]);
    const [allLists, setAllLists] = useState({});

    const location = useLocation();
    const { date } = location.state;
    
    console.log("currentList:",allLists )
    // const todosForSelectedDate = currentList.filter(currentList => isSameDay(currentList.date, date));
    // console.log("$$todosForSelectedDate$$$$", todosForSelectedDate)


    const updateList = (item) => {
        setCurrentList([...currentList, item.newTask]);
        console.log("?????", date)
  

        setAllLists({
          ...allLists,
          [date]: {currentList}
        });
    }

    return (
        <>
            <AddTask updateList={updateList}
                        date={{ date }}/>
            {currentList.map((task) => <li>{task}</li>)}
            {/* <ul>
                {todosForSelectedDate.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul> */}
        </>
    )
}

export default ToDoList;