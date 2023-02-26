import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom'

import AddTask from './AddTask.jsx';

const ToDoList = (props) => {
    const [currentList, setCurrentList] = useState([]);
    const [allLists, setAllLists] = useState({});

    const location = useLocation();
    console.log("###:", location)
    const { date } = location.state;
  

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
        </>
    )
}

export default ToDoList;