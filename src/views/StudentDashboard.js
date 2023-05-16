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
  } else if (user.role !== "student") {
    return <UnAuthorized />;
  } else {
    return (
      <Layout>
        <div className="container my-4">
          <div className="row mb-4">
            <div className="col-12">
              <div className="card shadow bg-dark text-white">
                <img
                  src="https://i.pinimg.com/564x/9c/e9/4f/9ce94f34f809a2c2b64a7267ca6c240d.jpg"
                  className="card-img"
                  alt="..."
                  height={250}
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Hey, {user.name}</h5>
                  <p className="card-text">
                    Thanks for logging in. We hope you enjoy the upcoming events.
                  </p>
                  <p className="card-text">New Clubs and Events are here !!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <Carousel />
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
