import React from "react";

const EventCard = () => {
  return (
    <div class="card shadow-lg rounded" style={{ width: "18rem" }}>
      <img
        class="card-img-top"
        src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif"
        alt="Card image cap"
        style={{ height: "150px", objectFit: "cover" }}
      />
      <div class="card-body">
        <h5 class="card-title font-weight-bold">Title</h5>
        <a href="#" class="btn btn-outline-primary btn-sm">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default EventCard;
