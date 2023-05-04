import React from "react";

const EventCard = ({ title, imgUrl }) => {
  return (
    <div class="card shadow-lg rounded" style={{ width: "18rem" }}>
      <img
        class="card-img-top"
        src={imgUrl}
        alt="Card image cap"
        style={{ height: "150px", objectFit: "cover" }}
      />
      <div class="card-body">
        <h5 class="card-title font-weight-bold">{title}</h5>
        <a href="#" class="btn btn-outline-dark btn-sm">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default EventCard;
