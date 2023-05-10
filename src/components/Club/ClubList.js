import React from "react";
import ClubCard from "./ClubCard";

const ClubList = () => {
  const clubs = [
    {
      id: "fas43iewoiwasu94wfn84",
      title: "Royal challengers banglore fan",
      description: "Ee saal cup namde",
      link: "https://media2.giphy.com/media/SvohqSY2NlobP1vYEh/giphy.gif?cid=ecf05e47aqhkq6eur59kg7lnazbk5ybqps16vjqyg60nwkiw&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    },
    {
      id: "sfoji8094380jv89v",
      title: "Lakers",
      description: "dunk it !!",
      link: "https://media0.giphy.com/media/l396C47UDXD26vPZ6/giphy.gif?cid=ecf05e47uiczh4vywfgmf6wyxnrv35r9fpmzel2ndq2ttmkr&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    },
    {
      id: "ioioiosffds877894n",
      title: "Royal challengers banglore fan",
      description: "Ee saal cup namde",
      link: "https://media2.giphy.com/media/SvohqSY2NlobP1vYEh/giphy.gif?cid=ecf05e47aqhkq6eur59kg7lnazbk5ybqps16vjqyg60nwkiw&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    },
    {
      id: "zmsiogj8trsje8tnvtvnt",
      title: "Dragon Slayers",
      description: "slay the dragons",
      link: "https://media2.giphy.com/media/Wen3tZFsGA1hu/100.webp?cid=ecf05e477aghap9qw8dmixl6cm4y6ow64p0flhmdssjkhfgl&ep=v1_gifs_search&rid=100.webp&ct=g",
    },
  ];
  return (
    <>
      <h2 className="bg-dark text-light">Your clubs </h2>
      <div className="row">
        {clubs.map((item) => (
          <div className="col-lg-5">
            <ClubCard club={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ClubList;
