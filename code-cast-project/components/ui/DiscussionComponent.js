import React, { useState } from 'react';

const DiscussionComponent = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmitComment = () => {
    if (newComment.trim() !== '') {
      setComments((prevComments) => [...prevComments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div>
      <h2>Discussion Forum</h2>
      <textarea
        value={newComment}
        onChange={handleCommentChange}
        placeholder="Type your comment here"
      />
      <button onClick={handleSubmitComment}>Submit Comment</button>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default DiscussionComponent;