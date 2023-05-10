import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  const link = `/event/sadfklfjlkwoie943`;
  return (
    <div class="card shadow m-2">
      <div class="card-header bg-dark text-white">Featured</div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" class="btn btn-dark shadow-sm">
          Go somewhere
        </a>
      </div>
    </div> 
  );
};

export default EventCard;
