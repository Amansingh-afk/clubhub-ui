import React, { useState } from "react";
import Layout from "../Layout/Layout";
import EventMembers from "./EventMembers";
import { useParams } from "react-router-dom";

const EventDetail = () => {
  const { id } = useParams();
  const [eventData, setEventData] = useState(null);
  const clubName = "Delhi Capitals"; // Replace with the actual club name
  const scheduledDate = "31 Dec 2023"; // Replace with the actual scheduled date

  return (
    <Layout>
      <div className="container py-3">
        <div className="card border-0">
          <div className="card-header border bg-dark text-white rounded">
            <h5 className="card-title">
              <small className="text-muted">Club name:</small> {clubName}
            </h5>
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h3 className="card-subtitle mb-2 text-muted"> vv</h3>
              <p className="text-muted">
                <small>
                  scheduled date:{" "}
                  <span className="text-dark">{scheduledDate}</span>
                </small>
              </p>{" "}
            </div>
            <p className="card-text">description</p>
          </div>
        </div>
        <div className="my-5">
          <EventMembers />
        </div>
      </div>
    </Layout>
  );
};

export default EventDetail;
