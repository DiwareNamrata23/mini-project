import React, { useEffect, useState } from 'react';

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
                console.log("Fetched data:", data); // Log the fetched data
                setNews(data);
            } catch (error) {
                console.error("Error fetching news:", error);
                setError(error.message); // Capture the error message
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) return <div>Loading news...</div>;
    if (error) return <div>Error fetching news: {error}</div>;

    return (
        <div>
            <h1>Global News</h1>
            {news.length === 0 ? (
                <p>No news available.</p>
            ) : (
                news.map((article, index) => (
                    <div key={index}>
                        <h3>{article.title}</h3>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                    </div>
                ))
            )}
        </div>
    );
};

export default News;
