import { useState } from "react";


const CommentForm = ({handleSubmit}) => {
  const [text, setText] = useState(null);

 
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <textarea
          className="blockw-full
          px-3
        py-1.5 text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button type="submit" className="inline-block px-6 py-2.5 bg-blue-600 text-white 
         font-medium text-xs leading-tight uppercase rounded shadow-md
         hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" >
          Submit
        </button>
        
      </form>
    </>
  );
};

export default CommentForm;
