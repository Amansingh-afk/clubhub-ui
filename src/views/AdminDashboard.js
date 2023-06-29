import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import useAuth from "../utils/UseAuth";
import { getAllClubs, getAllEvents } from "../utils/api";

import UnAuthorized from "../components/Common/UnAuthorized";
import ClubCard from "../components/Club/ClubCard";
import EventCard from "../components/Event/EventCard";
import Carousel from "../components/Common/Carousel";
import Spinner from "../components/Common/Spinner";

const AdminDashboard = () => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const [clubs, setClubs] = useState([]);
  const [events, setEvents] = useState([]);
  const [clubsToShow, setClubsToShow] = useState(4);
  const [eventsToShow, setEventsToShow] = useState(4);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { clubs } = await getAllClubs();
        setClubs(clubs);
        const { events } = await getAllEvents();
        setEvents(events);
        console.log(events[0]);
      } catch (err) {
        console.log("Error fetching clubs", err);
      }
    };
    fetch();
  }, []);
  if (isLoading) {
    return <Spinner />;
  }

  const handleViewMoreClubs = () => {
    setClubsToShow(clubsToShow + 4);
  };

  const handleViewMoreEvents = () => {
    setEventsToShow(eventsToShow + 4);
  };

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  } else if (user.role !== "admin") {
    return <UnAuthorized />;
  } else {
    return (
      <>
        <div className="container my-2">
          <div className="row">
            <div className="col-md-6 p-0">
              <div className="card mb-3 shadow border-0 bg-dark">
                <div className="card-body text-light">
                  <h5 className="card-title">Welcome, {user.name}!</h5>
                  <p className="card-text">
                    Thanks for logging in. We hope you enjoy the upcoming event.
                  </p>
                </div>
              </div>
              {/* <EventCard event={events[0]} /> */}
            </div>
            <div className="col-md-6 p-0 px-md-2">
              <Carousel />
            </div>
          </div>
        </div>
        <div className="row px-2 mb-4">
          <div className="mb-3 px-2 rounded shadow  d-flex bg-dark text-light justify-content-between align-items-center">
            <h2>Clubs </h2>
            <button
              className="btn text-light btn-outline-dark"
              onClick={handleViewMoreClubs}
            >
              view more
            </button>
          </div>
          {!clubs.length && <div>No clubs to show..</div>}
          {clubs.slice(0, clubsToShow).map((item) => (
            <div className="col-lg-6 py-2" key={item._id}>
              <ClubCard club={item} />
            </div>
          ))}
        </div>
        <div className="row px-2">
          <div className="mb-3 px-2 rounded shadow d-flex bg-dark text-light justify-content-between align-items-center">
            <h2>Events</h2>
            <button
              className="btn text-light btn-outline-dark"
              onClick={handleViewMoreEvents}
            >
              view more
            </button>{" "}
          </div>
          {!events.length && <div>No events to show..</div>}
          {events.slice(0, eventsToShow).map((item) => (
            <div className="col-lg-6" key={item._id}>
              <EventCard event={item} />
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default AdminDashboard;
