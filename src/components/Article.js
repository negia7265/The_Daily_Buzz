import React from "react";
import "../styles/article.css";

export default function Article1(props) {
  const author = props.data.author?.toUpperCase();
  console.log(author);
  return (
    <div>
      <div className="article" style={{ width: "22rem" }}>
        <div className="article-image-container">
          <img
            src={props.data.urlToImage}
            className="article-image"
            alt="img"
          />
        </div>
        <div className="article-body">
          <h1 className="article-title">{props.data.title}</h1>
          <p className="article-text">{props.data.description}</p>
          <h3 className="article-credit">{`BY ${author}`}</h3>
        </div>
      </div>
    </div>
  );
}
