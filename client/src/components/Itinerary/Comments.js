import React from "react";

const Comments = ({ comments, action }) => {
  return (
    <div>
      <input type="text" placeholder="Leave your comment"/>
      <input type="submit" onClick={action} />
      
    </div>
  );
};
export default Comments;
