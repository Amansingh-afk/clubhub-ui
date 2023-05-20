import React from "react";

import ClubList from "./ClubList";
import useAuth from "../../utils/UseAuth";
import Spinner from "../Common/Spinner";

const Club = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <Spinner />;
  }
  return (
      <ClubList
        isAdmin={user.role === "admin"}
        isStudent={user.role === "student"}
      />
  );
};

export default Club;
