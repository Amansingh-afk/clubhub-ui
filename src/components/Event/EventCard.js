import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  const link = `/event/sadfklfjlkwoie943`;
  return (
    <div class="card shadow-lg rounded" style={{ width: "18rem" }}>
      <img
        class="card-img-top"
        src={event.imgUrl}
        alt="Card image cap"
        style={{ height: "150px", objectFit: "cover" }}
      />
      <div class="card-body">
        <h5 class="card-title font-weight-bold">{event.title}</h5>
        <Link to={link} class="btn btn-outline-dark btn-sm">
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
