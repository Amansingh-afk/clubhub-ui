import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import {
  getEventData,
  joinEvent,
  leaveEvent,
  joinTeam,
  deleteEvent,
  setEventAsCompleted,
} from "../../utils/api";

import EventMembers from "./EventMembers";
import Spinner from "../Common/Spinner";
import useAuth from "../../utils/UseAuth";
import TeamForm from "./TeamForm";

const EventDetail = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const teamsRef = useRef(null);

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
        console.log(hasParticipated);
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
    toast.info("This feature is in progress, SORRY!!");
  };

  const joinEventTeam = async (teamId) => {
    try {
      const member = {
        eventId: id,
        userId: user._id,
        clubId: event.club_id,
        teamId: teamId,
      };
      await joinTeam(member);
      toast.success("Joined team successfully");
      setRefreshKey((prev) => prev + 1);
    } catch (err) {
      toast.error(err.response.data.error);
    }
  };

  const handleDeleteEvent = async () => {
    try {
      await deleteEvent(id);
      toast.success(`${event.name} event deleted successfully`);
      navigate("/club");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const handleEventCompleted = async (isCompleted) => {
    try {
      await setEventAsCompleted(id, isCompleted);
      setRefreshKey((prev) => prev + 1);
      toast.success(
        `Event has been marked ${isCompleted ? "Completed" : "in-progess"}`
      );
    } catch (err) {
      console.log(err.response);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleExploreTeams = () => {
    teamsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <TeamForm
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        eventId={id}
        clubId={event.club_id}
        setRefreshKey={setRefreshKey}
      />
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
                <h3 className="card-subtitle mb-2">{event.name}</h3>
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
            <div>
              <Link
                to={`/event/update/${id}`}
                className=" m-2 btn btn-primary shadow rounded"
              >
                {" "}
                <i className="bx bx-edit-alt"></i> Edit event details
              </Link>
              {!event.has_completed && (
                <button
                  className="m-2 btn btn-primary shadow rounded"
                  onClick={() => handleEventCompleted(true)}
                >
                  <i className="bx bx-check"></i> Mark as Complete
                </button>
              )}
              {event.has_completed && (
                <button
                  className="m-2 btn btn-primary shadow rounded"
                  onClick={() => handleEventCompleted(false)}
                >
                  <i className="bx bx-check"></i> Mark as Incomplete
                </button>
              )}
              <button
                className="m-2 btn btn-danger shadow rounded"
                onClick={handleDeleteEvent}
              >
                <i className="bx bx-trash"></i> Delete Event
              </button>
            </div>
          )}
          {user.role === "student" &&
            !event.has_completed &&
            (hasParticipated ? (
              <button
                className="m-2 btn btn-danger shadow rounded"
                onClick={handleLeaveEvent}
              >
                <i className="bx bx-log-out"></i> Leave Event
              </button>
            ) : event.event_type === "team" ? (
              <>
                <button
                  onClick={handleOpenModal}
                  className="m-2 btn btn-success shadow rounded"
                >
                  Create a New Team
                </button>
                <button
                  className="m-2 btn btn-outline-dark shadow rounded"
                  onClick={handleExploreTeams}
                >
                  Explore Available Teams
                </button>
              </>
            ) : (
              <button
                onClick={handleParticipation}
                className="my-2 mx-2 btn btn-success shadow rounded"
              >
                <i className="bx bx-rocket"></i> Participate
              </button>
            ))}
          <div className="my-4">
            <p className="fs-5 bg-dark text-light px-3 py-1 rounded-top mb-0">
              Participant List
            </p>
            <EventMembers
              eventId={id}
              isAdmin={isAdmin}
              participants={participants}
              isTeamEvent={event.event_type === "team"}
              setRefreshKey={setRefreshKey}
            />
          </div>
          {event.event_type === "team" && (
            <div className="my-4" ref={teamsRef}>
              <p className="fs-5 bg-dark text-light px-3 py-1  rounded-top mb-0">
                Team List
              </p>
              <div className="table-responsive">
                <table className="table table-striped table-hover shadow">
                  <thead className="table-dark">
                    <tr>
                      <th>Team Name</th>
                      <th>leader</th>
                      <th>Roll no.</th>
                      <th>Description</th>
                      {!event.has_completed && user.role === "student" && (
                        <th>Action</th>
                      )}
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
                        <td>{row.created_by.roll_no.toUpperCase()}</td>
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
                        {!event.has_completed && user.role === "student" && (
                          <td>
                            <button
                              className="btn btn-success"
                              onClick={() => joinEventTeam(row._id)}
                            >
                              join <i className="bx bx-user-plus"></i>
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
