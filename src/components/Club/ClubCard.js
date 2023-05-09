import React from "react";
import { Link } from "react-router-dom";
import "./ClubCard.css";

const ClubCard = ({ club }) => {
  const link = `/club/${club.id}`;
  return (
    <div class="container d-flex justify-content-center m-2">
      <div class="card club_card shadow p-2">
        <div class="d-flex align-items-center">
          <div class="image">
            <img src={club.link} class="rounded" width={155} height={140} />
          </div>

          <div class="ms-3 w-100">
            <h4
              class="mb-0 mt-0"
              style={{
                maxWidth: "200px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {club.title}
            </h4>
            <span>{club.description}</span>

            <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
              <div class="d-flex flex-column">
                <span class="articles">Members</span>
                <span class="number1">38</span>
              </div>

              <div class="d-flex flex-column">
                <span class="followers">Events</span>
                <span class="number2">980</span>
              </div>

              <div class="d-flex flex-column">
                <span class="rating">Rating</span>
                <span class="number3">8.9</span>
              </div>
            </div>

            <div class="button mt-2 d-flex flex-row align-items-center">
              <button class="btn btn-sm btn-outline-dark w-100">
                Register
              </button>
              <Link class="btn btn-sm btn-dark w-100 ms-2" to={link}>
                check out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubCard;
