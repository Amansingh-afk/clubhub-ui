import { Link } from "react-router-dom";
import Spinner from "../Common/Spinner";
const ClubCard = ({ club }) => {
  // Render loading skeleton if club data is not available
  if (!club) {
    return <Spinner />;
  }
  const link = `/club/${club._id}`;

  return (
    <div class="card rounded shadow text-white">
      <img src={club.banner.url} class="card-img" alt="..." height={220} />
      <div class="card-img-overlay">
        <h5 class="card-title text-decoration-underline">{club.name}</h5>
        <p class="card-text">{club.description}</p>
        <p className="card-text">Admin : {club.adminName}</p>
        <Link to={link} className="btn btn-outline-light">
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default ClubCard;
