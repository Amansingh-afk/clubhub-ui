import { Navigate } from "react-router-dom";

import useAuth from "../hooks/UseAuth";

import UnAuthorized from "../components/Common/UnAuthorized";
import Layout from "../components/Layout/Layout";
import ClubCard from "../components/Club/ClubCard";
import EventCard from "../components/Event/EventCard";

const AdminDashboard = () => {
  const { isAuthenticated, role, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
  } else if (role !== "admin") {
    return <UnAuthorized />;
  } else {
    return (
      <Layout>
        <div className="row">
          <h2 className="">Clubs </h2>
          {clubs.map((item) => (
            <div className="col-lg-5 m-1">
              <ClubCard club={item} />
            </div>
          ))}
        </div>
        <div className="row ms-2 my-2">
          <h2>Events..</h2>
          {events.map((item) => (
            <div className="col-lg-4">
              <EventCard event={item} />
            </div>
          ))}
        </div>
      </Layout>
    );
  }
};

export default AdminDashboard;
