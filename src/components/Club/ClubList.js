import { useEffect, useState } from "react";
import ClubCard from "./ClubCard";
import { getAdminClub, getAllClubs } from "../../utils/api";
import Spinner from "../Common/Spinner";

const ClubList = ({ isAdmin, isStudent }) => {
  const [adminClub, setAdminClub] = useState(null);
  const [clubs, setClubs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchClubData = async () => {
      try {
        const { clubs } = await getAllClubs();
        setClubs(clubs);

        if (isAdmin || isStudent) {
          const { club } = await getAdminClub();
          setAdminClub({ ...club, loading: false });
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching club data:", error);
        setIsLoading(false);
      }
    };

    fetchClubData();
  }, [isAdmin, isStudent]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {adminClub && (
            <>
              <h2 className="px-2 py-1 bg-dark text-light rounded shadow">
                Your club
              </h2>
              <div className="row my-5">
                <div className="col-lg-6 my-2">
                  {adminClub.banner ? (
                    <ClubCard club={adminClub} />
                  ) : (
                    <p>No admin club found.</p>
                  )}
                </div>
              </div>
            </>
          )}

          <h2 className="px-2 py-1 bg-dark text-light rounded shadow">
            Clubs
          </h2>
          <div className="row my-5">
            {clubs.map((item) => (
              <div className="col-lg-6 my-2" key={item.id}>
                <ClubCard club={item} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ClubList;
