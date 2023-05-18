import React from "react";
import EventCard from "./EventCard";
import { Link } from "react-router-dom";

const EventList = () => {
  const event = [
    {
      id: "zmsiogj8trsje8tnvtvnt",
      club_name: "Royal challengers bangalore",
      name: "fan secret meet",
      description: "ee saal cup naam de !!",
      scheduled_date: "31 dec 2023",
    },
    {
      id: "iuhjks87gj8trsje8tnvtv9889",
      club_name: "Lucknow Super giants",
      name: "Lucknow fan meet event",
      description: "KL rahul bakchod hai",
      scheduled_date: "31 dec 2023",
    },
    {
      id: "okkoiogj8trsje8tnvtzvx4",
      club_name: "Delhi capitals",
      name: "Rishabh pant ke L lag gaye..",
      description: "delhi se hai bhenchod..",
      scheduled_date: "31 dec 2023",
    },
  ];
  return (
    <>
      <div className="d-flex justify-content-between align-items-center bg-dark text-white rounded shadow p-0">
        <h4 className="px-3 py-1">Your events</h4>
        <Link className="btn py-2 btn-primary shadow rounded">
          Create Event
        </Link>
      </div>
      <div className="row">
        {event.map((item) => (
          <div className="col-lg-6" key={item.id}>
            <EventCard event={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default EventList;
