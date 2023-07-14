import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../utils/UseAuth";

const SearchBar = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (query.trim() === "") {
        setResults([]);
        return;
      }

      try {
        const keyword = query;
        const response = await fetch(
          `/api/v1/search?keyword=${encodeURIComponent(keyword)}`
        );
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSearchResults();
  }, [query]);

  const handleSearch = (event) => {
    setQuery(event.target.value);
    if (event.target.value) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  const redirectUser = (result) => {
    let url = "";
    if (result.hasOwnProperty("event_type")) {
      url = `/event/${result._id}`;
    } else {
      url = `/club/${result._id}`;
    }

    navigate(url);
    setQuery("");
    setShowResults(false);
  };
  return (
    <div className="container mt-2">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={query}
              onChange={handleSearch}
              placeholder="Search for clubs and events...."
            />
            <button className="btn btn-dark rounded-end">
              <i className="bx bx-search"></i>
            </button>
          </div>
          {showResults && (
            <div className="search-results-overlay">
              {results.length === 0 && (
                <p className="p-2">Nothing to show...</p>
              )}
              <ul className="list-group mt-2">
                {results.map((result, index) =>
                  user.role === "super_admin" && result.event_type ? null : (
                    <li
                      className="list-group-item card-title"
                      key={index}
                      onClick={() => redirectUser(result)}
                    >
                      {result.name}
                      <span className="float-end text-decoration-underline">{result.event_type ? 'Event' : 'Club'}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
