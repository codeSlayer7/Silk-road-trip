import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import instance from "../../redux/service/userService/interceptor";

const ArticleCard = () => {
  const [article, setArticle] = React.useState(null);

  useEffect(() => {
    instance.get("/article").then((res) => setArticle(res.data));
  }, []);

  return (
    <div className="flex flex-wrap">
      {article&&article.map((el)=>(
        <div key={el.id} className="block m-2 p-6 rounded-lg shadow-lg bg-white w-[45%]">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
         {el.title}

        </h5>
        <p className="text-gray-700 text-base mb-4">
          {el.text.substr(0,200)}
        </p>
       <Link to={`/article/${el.id}`}> <button
          type="button"
          className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          See more...
        </button>
        </Link>
      </div>
      ))}
    </div>
  );
};

export default ArticleCard;
