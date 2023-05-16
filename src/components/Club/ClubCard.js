import { Link } from "react-router-dom";

const ClubCard = ({ club }) => {
  
  // Render loading skeleton if club data is not available
  if (!club) {
    return <p>loadin..card..</p>;
  }
  const link = `/club/${club._id}`;

  return (
    <div className="card shadow border border-0 border-rounded p-2">
      <div className="row g-0">
        <div className="col-md-6">
          {club.banner ? (
            <img
              src={club.banner.url}
              className="card-img shadow"
              alt="Image"
              height={180}
            />
          ) : (
            <p>loadin..card..</p> // Render loading skeleton for image
          )}
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {club.title}
            </h5>
            <small className="text-muted">
              Admin name:{" "}
              <span className="text-dark fs-6">{club.adminName}</span>
            </small>
            <p className="card-text">{club.description}</p>
            <Link className="btn btn-rounded btn-outline-dark" to={link}>
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubCard;
