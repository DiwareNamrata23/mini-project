import React, { useEffect, useState } from 'react';
import './News.css'; // Import your CSS

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

    // Spinner component
    const Spinner = () => {
        return (
            <div className="spinner">
                <div className="loading">Loading...</div>
            </div>
        );
    };

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
}

.news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}

.news-block {
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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
}
`;

// Inject CSS styles into the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default News;
