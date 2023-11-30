import { useState } from "react";

const GuideComments = () => {
  const [comments, setComments] = useState([]);
  // State to manage ratings
  const [rating, setRating] = useState(null);

  // Function to handle comment submission
  const handleCommentSubmit = (comment) => {
    setComments([...comments, comment]);
  };

  // Function to handle rating selection
  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
  };
  return (
    <div className="text-center pt-20 space-y-2">
      {/* Rating Section */}
      <h2 className="text-2xl font-semibold">Rating</h2>
      <div className="space-x-3 font-semibold">
        {[1, 2, 3, 4, 5].map((value) => (
          <button key={value} onClick={() => handleRatingChange(value)}>
            {value}
          </button>
        ))}
      </div>
      <p className="font-semibold">Selected Rating: {rating || "Not rated yet"}</p>

      {/* Comment Section */}
      <h2 className="text-2xl font-semibold pt-2">Comments</h2>
      <div>
        {/* Render existing comments */}
        {comments.map((comment, index) => (
          <div key={index}>{comment}</div>
        ))}
      </div>
      {/* Comment Input */}
      <textarea className="font-semibold"
        placeholder="Add a comment..."
        onChange={(e) => handleCommentSubmit(e.target.value)}
      />
    </div>
  );
};

export default GuideComments;
