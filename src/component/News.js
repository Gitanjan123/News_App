import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";

function News() {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      <img id="image" src="https://e7.pngegg.com/pngimages/3/57/png-clipart-india-news-news-broadcasting-television-news-television-logo.png" alt="avatar">
      </img>
      <h1 className="head__text" style={{color:'aqua'}}>TOP NEWS HEADLINES!!</h1>
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default News;

