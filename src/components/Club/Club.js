import React from "react";
import Layout from "../Layout/Layout";
import ClubList from "./ClubList";
import useAuth from "../../utils/UseAuth";

const Club = () => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <ClubList
        isAdmin={user.role === "admin"}
        isStudent={user.role === "student"}
      />
    </Layout>
  );
};

export default Club;
