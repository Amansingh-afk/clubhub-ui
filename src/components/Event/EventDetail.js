import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { getEventData, joinEvent, leaveEvent } from "../../utils/api";

import EventMembers from "./EventMembers";
import Spinner from "../Common/Spinner";
import useAuth from "../../utils/UseAuth";

const EventDetail = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [refreshKey, setRefreshKey] = useState(0);
  const [event, setEvent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);
  const [hasParticipated, setHasParticipated] = useState(false);
  const [participants, setParticipants] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const { isAdmin, hasParticipated, event, participants } =
          await getEventData(id);
        setEvent(event);
        setHasParticipated(hasParticipated);
        setParticipants(participants);
        setIsAdmin(isAdmin);
      } catch (err) {
        toast.error(err.response.data.error);
      }
    };

    fetchEventData();
  }, [id, refreshKey]);

  if (event === null) {
    return <Spinner />;
  }

  const handleParticipation = async () => {
    try {
      const participant = {
        eventId: id,
        clubId: event.club_id,
        userId: user._id,
      };
      await joinEvent(participant);
      setHasParticipated(true);
      toast.success("Participation successful");
      setRefreshKey((prev) => prev + 1);
    } catch (err) {
      toast.warning(err.response.data.error);
    }
  };

  const handleLeaveEvent = async () => {
    try {
      const eventId = id;
      setHasParticipated(false);
      await leaveEvent(eventId);
      toast.warning("You left this event!!");
      setRefreshKey((prev) => prev + 1);
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
          {isAdmin && (
            <Link
              to={`/event/update/${id}`}
              className=" my-2 btn btn-primary shadow rounded"
            >
              Edit event details
            </Link>
          )}
          {user.role === "student" &&
            (hasParticipated ? (
              <button
                className="m-2 btn btn-danger shadow rounded"
                onClick={handleLeaveEvent}
              >
                Leave Event
              </button>
            ) : (
              <button
                onClick={handleParticipation}
                className="my-2 mx-2 btn btn-dark shadow rounded"
              >
                Participate
              </button>
            ))}
          <div className="my-4">
            <EventMembers
              eventId={id}
              isAdmin={isAdmin}
              participants={participants}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default EventDetail;
