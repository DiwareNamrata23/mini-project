import React, { useEffect, useState } from 'react';
import './News.css'; // Import your CSS

const News = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://mini-backend-40s4.onrender.com/news');
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

    // Spinner component
    const Spinner = () => (
        <div className="spinner">
            <div className="loading">Loading...</div>
        </div>
    );

    if (loading) return <Spinner />; // Show spinner while loading
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

// CSS styles for the component
const styles = `
.news-container {
    padding: 20px;
    background-color: #f9f9f9;
}

.global {
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center; /* Center the title */
}

.news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 60px 20px; /* Increased vertical and horizontal spacing */
}

.news-block {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Add transitions */
}

.news-block:hover {
    transform: translateY(-5px); /* Elevate on hover */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
}

.spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full height for centering */
}

.loading {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
}

.error {
    color: red;
    text-align: center;
    font-size: 1.2rem; /* Increase error message size */
}
`;

// Inject CSS styles into the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default News;
