import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  const link = `/event/sadfklfjlkwoie943`;
  return (
    <div className="card shadow m-2">
      <div className="card-header bg-dark text-white">Featured</div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" className="btn btn-dark shadow-sm">
          Go somewhere
        </a>
      </div>
    </div> 
  );
};

export default EventCard;
