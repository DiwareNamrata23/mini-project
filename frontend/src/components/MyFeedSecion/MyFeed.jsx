import React, { useState } from "react";
import "./MyFeed.css"; // Add CSS for styling

const feeds = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/Xn7KWR9EOGQ    ", // Replace with your video link
    title: "Stock Market Updates",
    content: "Stock market saw significant growth today...",
    date: "2024-10-01",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/bLl_VRQ7pBs ", // Replace with your video link
    title: "Cryptocurrency News",
    content: "Bitcoin reached an all-time high of $60,000...",
    date: "2024-10-02",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/embed/bLl_VRQ7pBs    ", // Replace with your video link
    title: "Economy Insights",
    content: "Global economy is showing signs of recovery...",
    date: "2024-10-03",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },

  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0", // Replace with your video link
    title: "Tech Stocks Surge",
    content: "Rise in Tech Stocks despite new launches...",
    date: "2024-10-04",
  },
  // Add other feeds similarly with video URLs
];

const MyFeed = () => {
  const [feedItems, setFeedItems] = useState(feeds);
  const [query, setQuery] = useState("");

  function handleSearch(e) {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    const filteredData = feeds.filter((feed) =>
      `${feed.title} ${feed.content}`.toLowerCase().includes(value)
    );

    setFeedItems(filteredData);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="feed-container">
      <h2 className="feed-title">Learnings</h2>
      {/* <form className="search-form" onSubmit={handleSubmit}>
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
      </form> */}
      <div className="feed-list">
        {feedItems.map((item) => (
          <div className="feed-item" key={item.id}>
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
            <p>{item.content}</p>
            <span className="feed-date">{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFeed;
