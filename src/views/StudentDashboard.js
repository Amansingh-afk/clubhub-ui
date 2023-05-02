import { Navigate } from "react-router-dom";

import useAuth from "../hooks/UseAuth";

import ClubCard from "../components/Club/ClubCard";
import EventCard from "../components/Event/EventCard";
import Layout from "../components/Layout/Layout";
const StudentDashboard = () => {
  const { isAuthenticated, role, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  } else if (role !== "student") {
    return <div>Unauthorized Access</div>;
  } else {
    return (
      <Layout>
        <div className="row ms-2">
          <h4>Clubs </h4>
          <div className="col-lg-4">
            <ClubCard />
          </div>
          <div className="col-lg-4">
            <ClubCard />
          </div>
          <div className="col-lg-4">
            <ClubCard />
          </div>
        </div>
        <div className="row ms-2 my-2">
          <h4>Events..</h4>
          <div className="col-lg-4">
            <EventCard />
          </div>
          <div className="col-lg-4">
            <EventCard />
          </div>
          <div className="col-lg-4">
            <EventCard />
          </div>
        </div>
      </Layout>
    );
  }
};

export default StudentDashboard;
