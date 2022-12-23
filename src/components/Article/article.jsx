import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import instance from "../../redux/service/userService/interceptor";
import Comments from "../Comment/comments";

const Article = () => {
  const { articleId } = useParams();

  const [article, setArticle] = React.useState(null);

  useEffect(() => {
    instance.get(`/article/${articleId}`).then((res) => setArticle(res.data));
  
  }, []);
  console.log(article);

  return (
    <div className="for__container">
      {article && (
        <div className="p-2">
          <h2 className="text-4xl leading-tight mb-4 pb-4 border-b">
            {article.tittle}
          </h2>
          <p className="text-lg font-light"> {article.text}</p>{" "}
        </div>
      )}

        <Comments articleId={article?.id}/>

    </div>
  );
};

export default Article;
