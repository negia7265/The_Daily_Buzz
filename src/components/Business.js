import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "./Article";
export default function Business() {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    async function getData() {
      await axios
        .get(
          "https://newsapi.org/v2/top-headlines?category=business&apiKey=3df86d034f764dcaaa9ce9fab1413767"
        )
        .then((data) => {
          setArticle(data.data.articles);
        });
    }
    getData();
  }, []);
  return (
    <div>
      <div className="home">
        {article.map((data) => {
          return <Article data={data} />;
        })}
      </div>
    </div>
  );
}
