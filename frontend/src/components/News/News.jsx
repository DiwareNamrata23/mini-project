import React, { useState, useEffect } from 'react';
import axios from 'axios';

function News() {
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState("true");

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const response = await axios.get('http://localhost:3000/scrape-headlines');
        setHeadlines(response.data);
      } catch (error) {
        console.error("Error fetching headlines: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeadlines();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Scraped Yahoo Finance Headlines</h1>
      <ul>
        {headlines.map((headline, index) => (
          <li key={index}>
            <a href={headline.link} target="_blank" rel="noopener noreferrer">
              {headline.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;
