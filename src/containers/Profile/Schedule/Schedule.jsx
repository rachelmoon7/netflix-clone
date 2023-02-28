import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { format } from 'date-fns'

import './Schedule.css';
import Event from '../Events/Event.jsx';

const Schedule = (props) => {
    // format(new Date(), 'dd/mm/yyyy')
    const [date, setDate] = useState(new Date())
    const [showEvent, setShowEvent] = useState(false);
    const [name, setName] = useState('');
    const [maxCapacity, setMaxCapacity] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [eventCity, setEventCity] = useState('');
    const months = { 
        'Jan' : '01',
        'Feb': '02',
        'Mar': '03',
        'Apr': '04',
        'May': '05',
        'Jun': '06',
        'Jul': '07',
        'Aug': '08',
        'Sep': '09',
        'Oct': '10',
        'Nov': '11',
        'Dec': '12'
    }
    // const [allLists, setAllLists] = useState({});
    // console.log("SCHEDULE PROPS", props)
    const eventDates = props.events.map(event => event.date)
    // const eventName = props.events.map(event => event.name)

    const handleSelect = (date) => {
        //START HERE LINE 46 PRINTS FALSE BUT SHOULD BE TRUE
        setDate(date)

        const dateArr = date.toDateString().split(' ')
        let formattedDate = [months[dateArr[1]], dateArr[2], dateArr[3]]
        const selectedDate = formattedDate.join('/')

        if (eventDates.includes(selectedDate)) {
            setShowEvent(true);

            console.log("props.events:", props.events)
            console.log("$$$", showEvent)
            
            // for (const event in props.events) {
                props.events.map((event) => {
                console.log("what is event:", event)
                if (event.date == selectedDate) {
                    console.log("entering if")
                    setName(event.name);
                    setMaxCapacity(event.maxCapacity);
                    setEventDate(event.date);
                    setEventTime(event.time);
                    setEventCity(event.city);
                } 
            })
        }
    }

    return (
        <div className="calendar">
            <h1>Calendar</h1>
            <div className="calendar-container">
                <Calendar onChange={handleSelect}
                // onClickDay={handleSelect}
                            value={date}
                            setRange={true}
                            
                />
            </div>
            <span>
                {showEvent ? (
                    // <Event />
                    <Event name={name}
                                max_capacity={maxCapacity}
                                city={eventCity}
                                time={eventTime}
                                date={eventDate}  />
                ) : (
                    null
                )}
            </span>
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