import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

import useAuth from "../utils/UseAuth";

import UnAuthorized from "../components/Common/UnAuthorized";
import Layout from "../components/Layout/Layout";
import ClubCard from "../components/Club/ClubCard";

const SuperAdminDashboard = () => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const [clubsToShow, setClubsToShow] = useState(4);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleViewMoreClubs = () => {
    setClubsToShow(clubsToShow + 4);
  };
  const clubs = [
    {
      id: "fas43iewoiwasu94wfn84",
      admin_name: "dummy",
      title: "Royal Challengers banglore fan",
      description: "Ee saal cup namde",
      link: "https://media4.giphy.com/media/3oKIPtjElfqwMOTbH2/giphy.gif?cid=ecf05e47ifhe8vzxysiydhse6fnz0qa6u1v4l8knmp4jbfa7&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    },
    {
      id: "fas43iewoiwasu94wfn84",
      title: "Dragon Slayers",
      description: "slay the dragons",
      link: "https://media2.giphy.com/media/p6CZO4BJ8pUHwk1AY9/200w.webp?cid=ecf05e472tkcgppvd20lkqzagnla5504x4n5uty8ahfpzcsv&ep=v1_gifs_related&rid=200w.webp&ct=g",
    },
    {
      id: "fas43iewoiwasu94wfn84",
      title: "Royal Challengers banglore fan",
      description: "Ee saal cup namde",
      link: "https://media4.giphy.com/media/3oKIPtjElfqwMOTbH2/giphy.gif?cid=ecf05e47ifhe8vzxysiydhse6fnz0qa6u1v4l8knmp4jbfa7&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    },
    {
      id: "fas43iewoiwasu94wfn84",
      title: "Dragon Slayers",
      description: "slay the dragons",
      link: "https://media2.giphy.com/media/p6CZO4BJ8pUHwk1AY9/200w.webp?cid=ecf05e472tkcgppvd20lkqzagnla5504x4n5uty8ahfpzcsv&ep=v1_gifs_related&rid=200w.webp&ct=g",
    },
    {
      id: "fas43iewoiwasu94wfn84",
      title: "Royal Challengers banglore fan",
      description: "Ee saal cup namde",
      link: "https://media4.giphy.com/media/3oKIPtjElfqwMOTbH2/giphy.gif?cid=ecf05e47ifhe8vzxysiydhse6fnz0qa6u1v4l8knmp4jbfa7&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    },
    {
      id: "fas43iewoiwasu94wfn84",
      title: "Dragon Slayers",
      description: "slay the dragons",
      link: "https://media2.giphy.com/media/p6CZO4BJ8pUHwk1AY9/200w.webp?cid=ecf05e472tkcgppvd20lkqzagnla5504x4n5uty8ahfpzcsv&ep=v1_gifs_related&rid=200w.webp&ct=g",
    },
    {
      id: "fas43iewoiwasu94wfn84",
      title: "Royal Challengers banglore fan",
      description: "Ee saal cup namde",
      link: "https://media4.giphy.com/media/3oKIPtjElfqwMOTbH2/giphy.gif?cid=ecf05e47ifhe8vzxysiydhse6fnz0qa6u1v4l8knmp4jbfa7&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    },
    {
      id: "fas43iewoiwasu94wfn84",
      title: "Dragon Slayers",
      description: "slay the dragons",
      link: "https://media2.giphy.com/media/p6CZO4BJ8pUHwk1AY9/200w.webp?cid=ecf05e472tkcgppvd20lkqzagnla5504x4n5uty8ahfpzcsv&ep=v1_gifs_related&rid=200w.webp&ct=g",
    },
  ];

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  } else if (user.role !== "super_admin") {
    return <UnAuthorized />;
  } else {
    return (
      <Layout>
        <div class="container my-3">
          <div class="row">
            <div class="col-md-6">
              <div class="card mb-3 shadow border-0 bg-dark">
                <div class="card-body text-light">
                  <h5 class="card-title">Welcome, {user.name}!</h5>
                  <p class="card-text">
                    Thanks for logging in. We hope you enjoy the upcoming event.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="btn-group-lg d-flex justify-content-around" role="group">
                <Link to={"/club/new"} className="btn btn-primary btn-rounded shadow">
                  <i className="bx bx-plus"></i>
                  Create Club
                </Link>
                <Link type="button" className="btn btn-danger btn-rounded shadow">
                  <i className="bx bx-trash"></i>
                  Delete Club
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row px-2">
          <div className="mb-3 d-flex bg-dark text-light justify-content-between align-items-center rounded shadow">
            <h2>Clubs </h2>
            <button
              className="btn text-light btn-outline-dark"
              onClick={handleViewMoreClubs}
            >
              view more
            </button>
          </div>
          {clubs.slice(0, clubsToShow).map((item) => (
            <div className="col-lg-6 my-3">
              <ClubCard club={item} />
            </div>
          ))}
        </div>
      </Layout>
    );
  }
};

export default SuperAdminDashboard;
