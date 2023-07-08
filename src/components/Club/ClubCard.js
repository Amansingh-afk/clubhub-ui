import { Link } from "react-router-dom";
import Spinner from "../Common/Spinner";

const ClubCard = ({ club }) => {
  
  if (!club) {
    return <Spinner />;
  }
  const link = `/club/${club._id}`;

  return (
    <div className="card rounded shadow text-white club_card">
  <img src={club.banner.url} className="card-img" height="220" alt=""/>
  <div className="card-img-overlay">
    <h5 className="card-title text-decoration-underline text-capitalize">{club.name}</h5>
    <div className="card-text-container">
      <p className="card-text overflow-hidden text-truncate-2">{club.description}</p>
    </div>
    <p className="card-text ">Admin name: <span className="text-capitalize">{club.adminName}</span></p>
    <Link to={link} className="btn btn-outline-light">
      Learn more
    </Link>
  </div>
</div>

  );
};

export default ClubCard;
