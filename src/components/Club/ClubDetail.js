import React from "react";
import Layout from "../Layout/Layout";

const ClubDetail = () => {
  const club = {
    id: "fas43iewoiwasu94wfn84",
    admin: "Thano ka baap",
    title: "Royal Challengers banglore",
    description:
      "Ee saal cup namde, RCB ki bowling line up he lawdi hai. Saale randi",
    link: "https://media4.giphy.com/media/3oKIPtjElfqwMOTbH2/giphy.gif?cid=ecf05e47ifhe8vzxysiydhse6fnz0qa6u1v4l8knmp4jbfa7&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  };

  return (
    <Layout>
      <div>
        <button className="btn btn-primary shadow float-end">
          Edit Club Details
        </button>
      </div>
      <div className="container  mt-5">
        <div className="row border border-secondary py-2">
          <div className="col-12 col-sm-auto mb-3">
            <div className="mx-auto shadow" style={{ width: "500px" }}>
              <div
                className="d-flex justify-content-center align-items-center rounded"
                style={{
                  height: "140px",
                  backgroundColor: "rgb(233, 236, 239)",
                  backgroundImage: `url(${club.link})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <span
                  style={{
                    color: "rgb(166, 168, 170)",
                    font: "bold 8pt poppins",
                  }}
                >
                  club banner
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="mt-3">
              <h4>{club.title}</h4>
            </div>
            <div className="col-md-6 mb-3">
              <h6>{club.admin}</h6>
            </div>
          </div>
          <div className="mb-3">
            <p>{club.description}</p>
          </div>
        </div>
      </div>
      <div className="container mt-5">members list table</div>
    </Layout>
  );
};

export default ClubDetail;
