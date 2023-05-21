import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { getEventData, joinEvent } from "../../utils/api";

import EventMembers from "./EventMembers";
import Spinner from "../Common/Spinner";
import useAuth from "../../utils/UseAuth";

const EventDetail = () => {
  const { id } = useParams();
  const { user, isLoading } = useAuth();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const { event } = await getEventData(id);
        setEvent(event);
      } catch (err) {
        toast.error(err.response.data.error);
      }
    };

    fetchEventData();
  }, [id]);

  if (event === null) {
    return <Spinner />;
  }

  const handleParticipation = async () => {
    try {
      const participant = {
        eventId: event._id,
        clubId: event.club_id,
        userId: user._id,
      };
      await joinEvent(participant);
      toast.success("Participation successful");
    } catch (err) {
      toast.warning(err.response.data.error);
    }
  };

  return (
    <>
      {event && (
        <div className="container py-3">
          <div className="card border-0">
            <div className="card-header border bg-dark text-white rounded">
              <h5 className="card-title">
                <small className="text-muted">Club name:</small>{" "}
                {event.club_name}
              </h5>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h3 className="card-subtitle mb-2">
                  <small className="fs-5 text-decoration-underline text-muted">
                    Event title:
                  </small>{" "}
                  {event.name}
                </h3>
                <p className="text-muted">
                  <small>
                    scheduled date:{" "}
                    <span className="text-dark">{event.scheduled_date}</span>
                  </small>
                </p>{" "}
              </div>
              <p className="card-text preserve-formatting">
                <span className="text-decoration-underline text-muted">
                  Description
                </span>
                {": "}
                {event.description}
              </p>
            </div>
          </div>
          {user.role === "admin" && (
            <Link
              to={`/event/update/${id}`}
              className=" my-2 btn btn-primary shadow rounded"
            >
              Edit event details
            </Link>
          )}
          {user.role === "student" && (
            <button
              onClick={handleParticipation}
              className="my-2 mx-2 btn btn-dark shadow rounded"
            >
              Participate
            </button>
          )}
          <div className="my-4">
            <EventMembers />
          </div>
        </div>
      )}
    </>
  );
};

export default EventDetail;
