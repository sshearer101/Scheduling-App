import React, { useState } from "react";
// import { connect } from "react-redux";
import { useSelector } from "react-redux";
 


export default function Events({ props }){

    const [event, setEvent] = useState("")

    function handleChange(e){
        setEvent(e.target.value)
    }

    const addEvent = useSelector(state => state.eventReducer)

    return(
        <div className="addEvents">
            <input
                type="text"
                onChange={(e) => handleChange(e)}
                className="event-input"
                value={event}
            />
            <button className="add-button">
                Add Event
            </button>
            <div>
                <h1>{addEvent}</h1>
            </div>
        </div>
    )
}