import React, { useEffect, useState } from "react";

const SearchBar = () => {
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
      // Perform search and update the "results" state
      // based on the value of the query
    } else {
      setShowResults(false);
    }
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
                {results.length === 0 && <p className="p-2">Nothing to show...</p>}
              <ul className="list-group mt-2">
                {results.map((result, index) => (
                  <li className="list-group-item fa-bold" key={index}>
                    {result.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
