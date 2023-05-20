import { Link } from "react-router-dom";
import Spinner from "../Common/Spinner";

const ClubCard = ({ club }) => {
  
  if (!club) {
    return <Spinner />;
  }
  const link = `/club/${club._id}`;

  return (
    <div class="card rounded shadow text-white">
  <img src={club.banner.url} class="card-img" alt="..." height="220" />
  <div class="card-img-overlay">
    <h5 class="card-title text-decoration-underline">{club.name}</h5>
    <div class="card-text-container">
      <p class="card-text overflow-hidden text-truncate-2">{club.description}</p>
    </div>
    <p class="card-text">Admin name: {club.adminName}</p>
    <a href={link} class="btn btn-outline-light">
      Learn more
    </a>
  </div>
</div>

  );
};

export default ClubCard;
