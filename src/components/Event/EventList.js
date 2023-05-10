import React from "react";
import EventCard from "./EventCard";

const EventList = () => {
  const event = [
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
  return (
    <>
      <h2>Your events </h2>
      <div className="row">
        {event.map((item) => (
          <div className="col-lg-4">
            <EventCard event={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default EventList;
