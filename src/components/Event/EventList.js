import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { Link } from "react-router-dom";
import { getAllEvents } from "../../utils/api";
import Spinner from "../Common/Spinner";

const EventList = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { events } = await getAllEvents();
        setEvents(events);
      } catch (err) {
        console.log("Error fetching events: ", err);
      }
    };

    fetchEvents();
  }, []);

  if(events.length == 0){
    return <Spinner />
  }
  return (
    <>
      <div className="d-flex mb-3 justify-content-between align-items-center bg-dark text-white rounded shadow p-0">
        <h4 className="px-3 py-1">Your events</h4>
        <Link to="/event/new" className="btn py-2 btn-primary shadow rounded">
          Create Event
        </Link>
      </div>
      <div className="row">
        {events.map((item, index) => (
          <div className="col-lg-6" key={index}>
            <EventCard event={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default EventList;
