import { useState } from "react";
import { topics } from "../Data/topics";
import "./TopicSearch.css";

const TopicSearch = () => {
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const filtered = topics.filter((t) =>
    `${t.name} ${t.category}`.toLowerCase().includes(q)
  );

  return (
    <div className="topic-search-container">
      <header className="top-header">
        <div className="brand">TOTLE Catalogue</div>
      </header>

      <h2>Topic Catalogue</h2>

      <div className="search-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          aria-label="Search topics"
          placeholder="Search topics..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="topics-list" role="list">
        {filtered.length === 0 ? (
          <p className="no-topics fade">No topics found</p>
        ) : (
          filtered.map((topic) => (
            <div
              key={topic.id}
              className="topic-card fade-card"
              role="listitem"
            >
              <img
                src={topic.image}
                alt={topic.name}
                className="topic-image"
                loading="lazy"
              />

              <div className="topic-info">
                <h3>{topic.name}</h3>
                <p>{topic.category}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TopicSearch;
