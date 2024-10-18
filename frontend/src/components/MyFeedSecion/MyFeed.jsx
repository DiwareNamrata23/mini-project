import React, { useState, useEffect } from "react";
import "./MyFeed.css"; // Add CSS for styling

const MyFeed = () => {
  const [feedItems, setFeedItems] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Fetch video feed from the backend (Kafka consumer API)
    fetch("/api/videos")
      .then((res) => res.json())
      .then((data) => setFeedItems(data))
      .catch((err) => console.error("Error fetching video feed:", err));
  }, []);

  function handleSearch(e) {
    const value = e.target.value;
    setQuery(value);

    if (value.length === 0) {
      // Reset feed items (you could also refetch from the API)
      fetch("/api/videos")
        .then((res) => res.json())
        .then((data) => setFeedItems(data))
        .catch((err) => console.error("Error fetching video feed:", err));
    } else {
      const filteredData = feedItems.filter((feed) =>
        `${feed.title}`.toLowerCase().includes(value.toLowerCase())
      );
      setFeedItems(filteredData);
    }
  }

  return (
    <div className="feed-container">
      <h2 className="feed-title">Explore Our Feed</h2>
      <form className="search-form">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="searchInput"
            value={query}
            onChange={handleSearch}
          />
          <img src={"/search.png"} alt="Search Icon" className="searchIcon" />
        </div>
      </form>
      <div className="feed-list">
        {feedItems.map((item) => (
          <div className="feed-item" key={item.id}>
            {/* Render YouTube video iframe */}
            <iframe
              width="560"
              height="315"
              src={item.videoUrl}
              title={item.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3>{item.title}</h3>
            <span className="feed-date">{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFeed;
