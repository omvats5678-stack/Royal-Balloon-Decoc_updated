import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryCard from "../components/CategoryCard";

function Search() {
  const [decorations, setDecorations] = useState([]);

  useEffect(() => {
    axios.get("/api/decorations").then(res => setDecorations(res.data));
  }, []);

  return (
    <div className="container py-5">
      <h2>Search Results</h2>
      <div className="row">
        {decorations.map(d => (
          <div className="col-md-3" key={d.id}>
            <CategoryCard image={d.image} title={d.title} price={d.price}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;