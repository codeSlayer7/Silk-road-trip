import CommentForm from "./commentForm";
import instance from "../../redux/service/userService/interceptor";
import TokenService from "../../redux/service/userService/tokenService";
import { useEffect } from "react";
import { useState } from "react";
// import jwtDecode from "jwt-decode";
import Comment from "./comment";







const Comments = (props) => {
  const articleId = props.articleId;
  const [allComment, setComment] = useState(null);
  useEffect(() => {
    instance.get("/comment").then((res) => console.log(res));
  }, []);

  const handleSubmit = (text) => {
    // let token =TokenService.getLocalAccessToken()
    // console.log("comment",token)
    instance
      .post("/comment", {
        article: articleId,
        content: text,
      })
      .then((res) => console.log(res));
  };
  return (
    <>
      {allComment.map((comment) => (
        <Comment
          key={comment.id}
          content={comment.content}
          data={comment.creation_date}
          author={comment.author}
        />
      ))}
      <CommentForm handleSubmit={handleSubmit} />
    </>
  );
};

export default Comments;
