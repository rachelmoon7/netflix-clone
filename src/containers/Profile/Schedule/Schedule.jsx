import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Schedule = () => {
    const [date, setDate] = useState(new Date())
    // const [allLists, setAllLists] = useState({});

    console.log("date????", date)
    return (
        <div className="calendar">
            <h1>Calendar</h1>
            <div className="calendar-container">
                <Calendar onChange={setDate}
                            value={date}
                            setRange={true}
                />
            </div>
            <div className="text-center">
                Selected date: {date.toDateString()}
            </div>
            <Link to="/todo" 
                  state={{date: date}}>
                <Button>Create To-Do List for this date</Button>
            </Link>

            
        </div>
    )
}

export default Schedule;