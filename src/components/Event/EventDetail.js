import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { getEventData, joinEvent, leaveEvent } from "../../utils/api";

import EventMembers from "./EventMembers";
import Spinner from "../Common/Spinner";
import useAuth from "../../utils/UseAuth";
import TeamForm from "./TeamForm";

const EventDetail = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [refreshKey, setRefreshKey] = useState(0);
  const [event, setEvent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);
  const [hasParticipated, setHasParticipated] = useState(false);
  const [participants, setParticipants] = useState(null);
  const [team, setTeam] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const { isAdmin, hasParticipated, event, participants, team } =
          await getEventData(id);
        setEvent(event);
        setHasParticipated(hasParticipated);
        setParticipants(participants);
        setTeam(team);
        setIsAdmin(isAdmin);
        console.log(team);
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

  const removeTeam = async () => {
    toast.warning("This feature is in progress, SORRY!!");
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <TeamForm isOpen={isModalOpen} onClose={handleCloseModal} eventId={id} />
      {event && (
        <div className="container py-md-3 px-0">
          <div className="card border-0">
            <div className="card-header border bg-dark text-white rounded">
              <h5 className="card-title">
                <small className="text-muted">Club name:</small>{" "}
                {event.club_name}
              </h5>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h3 className="card-subtitle mb-2 text-nowrap">{event.name}</h3>
                <p className="text-muted ms-3">
                  <small>
                    scheduled date:{" "}
                    <span className="text-dark">{event.scheduled_date}</span>
                  </small>
                </p>{" "}
              </div>
              <p className="card-text preserve-formatting">
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
            ) : event.event_type === "team" ? (
              <>
                <button
                  onClick={handleOpenModal}
                  className="m-2 btn btn-success shadow rounded"
                >
                  Create your own Team?
                </button>
                <p className="text-center mb-2">OR</p>
                <p className="p-2 bg-dark text-light">
                  Join, below existing teams
                </p>
              </>
            ) : (
              <button
                onClick={handleParticipation}
                className="my-2 mx-2 btn btn-success shadow rounded"
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
          {event.event_type === "team" && (
            <div className="my-4">
              <div className="table-responsive">
                <table className="table table-striped table-hover shadow">
                  <thead className="table-dark">
                    <tr>
                      <th>Team Name</th>
                      <th>leader</th>
                      <th>Roll no.</th>
                      <th>Description</th>
                      {isAdmin && <th>Action</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {!team.length && (
                      <span className="text-nowrap px-4">
                        No team to show..
                      </span>
                    )}
                    {team.map((row) => (
                      <tr key={row._id} className="shadow-sm ">
                        <td>{row.name}</td>
                        <td>{row.created_by.name}</td>
                        <td>{row.created_by.roll_no}</td>
                        <td>{row.description}</td>
                        {isAdmin && (
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => removeTeam(row._id)}
                            >
                              <i className="bx bx-trash"></i>
                            </button>
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default EventDetail;
