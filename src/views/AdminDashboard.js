import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import useAuth from "../utils/UseAuth";
import { getAllClubs } from "../utils/api";

import UnAuthorized from "../components/Common/UnAuthorized";
import Layout from "../components/Layout/Layout";
import ClubCard from "../components/Club/ClubCard";
import EventCard from "../components/Event/EventCard";
import Carousel from "../components/Common/Carousel";
import Spinner from "../components/Common/Spinner";
const AdminDashboard = () => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const [clubs, setClubs] = useState([]);
  const [clubsToShow, setClubsToShow] = useState(4);

  useEffect(() => {
    const fetchAllClubs = async () => {
      try {
        const { clubs } = await getAllClubs();
        setClubs(clubs);
      } catch (err) {
        console.log("Error fetching clubs", err);
      }
    };
    fetchAllClubs();
  }, []);
  if (isLoading) {
    return <Spinner />;
  }

  const handleViewMoreClubs = () => {
    setClubsToShow(clubsToShow + 4);
  };

  const events = [
    {
      id: "zmsiogj8trsje8tnvtvnt",
      title: "Ghapa ghap",
      imgUrl:
        "https://media2.giphy.com/media/75wZWLEbYBx7i/200.webp?cid=ecf05e471s0fawaj0hfb0je765mrfyq68uycywkkaoo52ei7&ep=v1_gifs_search&rid=200.webp&ct=g",
    },
    {
      id: "zmsiogj8trsje8tnvtvnt",
      title: "AdharShilla 2023",
      imgUrl: "https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif",
    },
    {
      id: "zmsiogj8trsje8tnvtvnt",
      title: "Sports day 2023",
      imgUrl:
        "https://media0.giphy.com/media/xT4uQmNR79FCKyDlPG/giphy.gif?cid=ecf05e47r7jlutxhl9qhw4ogs3vtsdh2nxpz6k9kr300n9di&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    },
  ];
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  } else if (user.role !== "admin") {
    return <UnAuthorized />;
  } else {
    return (
      <Layout>
        <div className="container my-5">
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
          {clubs.slice(0, clubsToShow).map((item) => (
            <div className="col-lg-6 py-2">
              <ClubCard club={item} />
            </div>
          ))}
        </div>
        <div className="row px-2">
          <div className="mb-3 px-2 rounded shadow d-flex bg-dark text-light justify-content-between align-items-center">
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

export default AdminDashboard;
