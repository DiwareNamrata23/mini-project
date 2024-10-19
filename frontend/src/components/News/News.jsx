import React, { useEffect, useState } from 'react';
import "./News.css"; // Import your CSS

const News = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('http://localhost:5001/news');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setNews(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) return <div className="loading">Loading news...</div>;
    if (error) return <div className="error">Error fetching news: {error}</div>;

    return (
        <div className="news-container">
            <h1 className='global'>Global News</h1>
            {news.length === 0 ? (
                <p>No news available.</p>
            ) : (
                <div className="news-grid">
                    {news.map((article, index) => (
                        <div key={index} className='news-block'>
                            <h3>{article.title}</h3>
                            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default News;
