import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  const link = `/event/${event.id}`;
  return (
    <div className="card shadow m-2">
      <div className="card-header bg-dark text-white">{event.club_name}</div>
      <div className="card-body">
        <span className="d-flex justify-content-between">
          <h5 className="card-title">{event.name}</h5>
          <p className="text-muted">
            <small>
              scheduled date:{" "}
              <span className="text-dark">{event.scheduled_date}</span>
            </small>
          </p>
        </span>
        <p className="card-text">{event.description}</p>
        <Link to={link} className="btn btn-dark shadow-sm">
          Check this event
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
