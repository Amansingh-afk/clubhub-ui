import React from "react";
import Layout from "../Layout/Layout";
import ClubList from "./ClubList";
import useAuth from "../../utils/UseAuth";
import Spinner from "../Common/Spinner";

const Club = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <Spinner />;
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
