import { useState } from "react";
import { Navigate } from "react-router-dom";

import useAuth from "../utils/UseAuth";

import UnAuthorized from "../components/Common/UnAuthorized";
import Layout from "../components/Layout/Layout";
import ClubCard from "../components/Club/ClubCard";
import EventCard from "../components/Event/EventCard";

const AdminDashboard = () => {
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
        <div class="container my-5">
          <div class="row">
            <div class="col-md-6">
              <div class="card mb-3 shadow border-0 bg-dark">
                <div class="card-body text-light">
                  <h5 class="card-title">Welcome, [Username]!</h5>
                  <p class="card-text">
                    Thanks for logging in. We hope you enjoy the upcoming event.
                  </p>
                </div>
              </div>
              <EventCard event={events[0]} />
            </div>
            <div class="col-md-6">
              <div
                id="carouselExampleCaptions"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div style={{ height: "250px" }} className="bg-dark">
                      m
                    </div>
                    <div class="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>
                        Some representative placeholder content for the first
                        slide.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div style={{ height: "250px" }} className="bg-dark">
                      m
                    </div>
                    <div class="carousel-caption d-none d-md-block">
                      <h5 className="text-white">Second slide label</h5>
                      <p>
                        Some representative placeholder content for the second
                        slide.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div style={{ height: "250px" }} className="bg-dark">
                      m
                    </div>
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>
                        Some representative placeholder content for the third
                        slide.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="d-flex bg-dark text-light justify-content-between align-items-center">
            <h2>Clubs </h2>
            <button
              className="btn text-light btn-outline-dark"
              onClick={handleViewMoreClubs}
            >
              view more
            </button>
          </div>
          {clubs.slice(0, clubsToShow).map((item) => (
            <div className="col-lg-6">
              <ClubCard club={item} />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="d-flex bg-dark text-light justify-content-between align-items-center">
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
