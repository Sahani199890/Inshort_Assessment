import React, { useEffect, useState } from "react";
import "./NewsPage.css";
import formatDateTime from "../helper/Helper";
import Header from "../header/Header";
import Asidebar from "../asidebar/Asidebar";
import Banner from "../banner/Banner";

export default function NewsPage() {
  const [newsData, setNewsData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [oneNews, setOneNews] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?q=trump&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    if (response.ok) {
      const responseData = await response.json();
      setNewsData(responseData.articles);
    }
  };

  const toggleSidebar = () => {
    setVisible(!visible);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleOneNews = (news) => {
    setOneNews(news);
    scrollToTop();
  };

  return (
    <div className="homepage-parent">
      <div className="header-home-div">
        <Header onMenuClick={toggleSidebar} />
      </div>
      <div className="asidebar-home-div">
        <Asidebar visibility={visible} onClose={toggleSidebar} />
      </div>
      <div className="home-banner-component">
        <Banner />
      </div>
      <div className="container pt-3">
        <div className="newpage-container">
          <div className="cards-home-container">
            {newsData &&
              newsData.map((news, idx) => (
                <div className="homepage-card card" key={idx}>
                  <div className="news-content-div">
                    <div className="image-news-container">
                      <img
                        loading="lazy"
                        src={news.urlToImage}
                        className="news-article-image"
                        alt="news"
                      />
                    </div>
                    <div className="card-body">
                      <p
                        className="card-text card-text-div-news"
                        onClick={() => handleOneNews(news)}
                      >
                        {news.title || "No title available"}
                      </p>
                      <p className="publish-p">
                        <strong className="short-strong">short </strong>by{" "}
                        {news.author} / {formatDateTime(news.publishedAt)}
                      </p>
                      <p className="mb-4">{news.content}</p>
                      <p className="article-source">
                        Read more at {news.source.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {oneNews && (
            <div className="particular-news">
              <div>
                <img
                  loading="lazy"
                  src={oneNews.urlToImage}
                  className="news-article-image"
                  alt="news"
                />
              </div>
              <div className="card-body">
                <p className="card-text card-text-div-news">
                  {oneNews.title || "No title available"}
                </p>
                <p className="publish-p">
                  <strong className="short-strong">short </strong>by{" "}
                  {oneNews.author} / {formatDateTime(oneNews.publishedAt)}
                </p>
                <p className="mb-4">{oneNews.content}</p>
                <p className="particular-article-source">
                  Read more at {oneNews.source.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
