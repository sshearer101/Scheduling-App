import React from "react";
import { useSelector } from "react-redux";

export default function Events(){
    const eventTrack = useSelector(state => state.eventReducer)

    const [event, setEvent] = useState("")

    function handleChange(e){
        setEvent(e.target.value)
    }
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
                <h1>{eventTrack}</h1>
            </div>
        </div>
    )
}