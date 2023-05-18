import { Navigate } from "react-router-dom";

import useAuth from "../utils/UseAuth";

import UnAuthorized from "../components/Common/UnAuthorized";
import ClubCard from "../components/Club/ClubCard";
import EventCard from "../components/Event/EventCard";
import Layout from "../components/Layout/Layout";
import { useEffect, useState } from "react";
import { getAllClubs } from "../utils/api";
import Carousel from "../components/Common/Carousel";

const StudentDashboard = () => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const [clubs, setClubs] = useState([]);
  const [clubsToShow, setClubsToShow] = useState(4);

  useEffect(() => {
    const fetchAllClubs = async () => {
      try {
        const { clubs } = await getAllClubs();
        setClubs(clubs);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllClubs();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleViewMoreClubs = () => {
    setClubsToShow(clubsToShow + 4);
  };
  const events = [
    {
      id: "zmsiogj8trsje8tnvtvnt",
      club_name: "Royal challengers bangalore",
      name: "fan secret meet",
      description: "ee saal cup naam de !!",
      scheduled_date: "31 dec 2023",
    },
    {
      id: "iuhjks87gj8trsje8tnvtv9889",
      club_name: "Lucknow Super giants",
      name: "Lucknow fan meet event",
      description: "KL rahul bakchod hai",
      scheduled_date: "31 dec 2023",
    },
    {
      id: "okkoiogj8trsje8tnvtzvx4",
      club_name: "Delhi capitals",
      name: "Rishabh pant ke L lag gaye..",
      description: "delhi se hai bhenchod..",
      scheduled_date: "31 dec 2023",
    },
  ];
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  } else if (user.role !== "student") {
    return <UnAuthorized />;
  } else {
    return (
      <Layout>
        <div className="container my-4">
        <div className="row">
            <div className="col-md-6">
              <div className="card mb-3 shadow border-0 bg-dark">
                <div className="card-body text-light">
                  <h5 className="card-title">Welcome, {user.name}!</h5>
                  <p className="card-text">
                    Thanks for logging in. We hope you enjoy the upcoming event.
                  </p>
                </div>
              </div>
              <EventCard event={events[0]} />
            </div>
            <div className="col-md-6">
              <Carousel />
            </div>
          </div>
        </div>
        <div className="row mb-4 px-2">
          <div className="mb-3 shadow rounded d-flex bg-dark text-light justify-content-between align-items-center">
            <h2>Clubs </h2>
            <button
              className="btn text-light btn-outline-dark"
              onClick={handleViewMoreClubs}
            >
              view more
            </button>
          </div>
          {clubs.slice(0, clubsToShow).map((item) => (
            <div className="col-lg-6 py-2">
              <ClubCard club={item} />
            </div>
          ))}
        </div>
        <div className="row px-2">
          <div className="mb-3 shadow rounded d-flex bg-dark text-light justify-content-between align-items-center">
            <h2>Events</h2>
            <h6>view more</h6>
          </div>
          {events.map((item) => (
            <div className="col-lg-6">
              <EventCard event={item} />
            </div>
          ))}
        </div>
      </Layout>
    );
  }
};

export default StudentDashboard;
