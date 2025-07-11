import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css"; // Use the cosmic-theme styles you've defined

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const API_KEY = "91391876320a499aa9dcd16dffeb49f3";
  useEffect(() => {
  const handleScroll = () => {
    const navbar = document.querySelector(".news-navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


useEffect(() => {
  const fetchNews = async () => {
    try {
      const [teslaNews, spaceNews] = await Promise.all([
        axios.get(`https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&language=en&apiKey=${API_KEY}`),
        axios.get(`https://newsapi.org/v2/everything?q=spacex&sortBy=publishedAt&language=en&apiKey=${API_KEY}`)
      ]);
      setArticles([...teslaNews.data.articles, ...spaceNews.data.articles]);
    } catch (error) {
      console.error("Error fetching multiple news sources:", error);
    }
  };

  fetchNews();
}, []);

  return (
    <div className="news-container">
      <div className="stars-container"></div>

      <div className="news-navbar">
        <span className="news-navbar-text">News-Pit</span>
        <pre>
          "Fill your
          mind with
          knowledge"
        </pre>
      </div>

      <div className="news-list">
        {articles.length === 0 ? (
          <p style={{ color: "var(--text-secondary)" }}>No news found.</p>
        ) : (
          articles.map((article, index) => (
            <div className="news-card" key={index}>
              {article.urlToImage && (
                <img src={article.urlToImage} alt="news" className="news-img" />
              )}
              <div className="news-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read more →
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NewsFeed;
