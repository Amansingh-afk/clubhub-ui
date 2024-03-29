import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import { getAllClubs } from "../utils/api";
import useAuth from "../utils/UseAuth";

import UnAuthorized from "../components/Common/UnAuthorized";
import ClubCard from "../components/Club/ClubCard";

const SuperAdminDashboard = () => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const [clubs, setClubs] = useState([]);
  const [clubsToShow, setClubsToShow] = useState(4);

  useEffect(() => {
    const fetchAllClubs = async () => {
      try {
        const { clubs } = await getAllClubs();
        setClubs(clubs);
      } catch (error) {
        console.error("Error fetching clubs:", error);
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

  const handleDeleteClub = () => {
    toast.info("This feature is in progress, SORRY!!");
  };

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  } else if (user.role !== "super_admin") {
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
            </div>
            <div className="col-md-6">
              <div
                className="btn-group-lg d-flex justify-content-around"
                role="group"
              >
                <Link
                  to={"/club/new"}
                  className="btn btn-primary btn-rounded shadow me-1"
                >
                  <i className="bx bx-plus"></i>
                  Create Club
                </Link>
                <button
                  onClick={handleDeleteClub}
                  type="button"
                  className="btn btn-danger btn-rounded shadow"
                >
                  <i className="bx bx-trash"></i>
                  Delete Club
                </button>
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
          {!clubs.length && <div>No clubs to show..</div>}
          {clubs.slice(0, clubsToShow).map((item) => (
            <div className="col-lg-6 my-3">
              <ClubCard club={item} />
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default SuperAdminDashboard;
