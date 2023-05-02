import React from "react";
import "./Club.css";

const CardGrid = () => {
  return (
    <div class="card shadow-lg rounded" style={{ width: "18rem" }}>
      <div class="card-body border-top border-warning border-2">
        <h5 class="card-title font-weight-bold mb-3">BC club</h5>
        <p class="card-text text-muted">
          Details lauda lehsun krke extra kar raha hu
        </p>
        <a href="#" class="btn btn-outline-primary btn-sm">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default CardGrid;
