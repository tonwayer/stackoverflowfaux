import React, { useState } from 'react';
import api from '../services/api';

interface CommentFormProps {
  questionId: number;
  onCommentSubmitted: () => void;
}

export const CommentForm: React.FC<CommentFormProps> = ({ questionId, onCommentSubmitted }) => {
  const [body, setBody] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const userId = 1; // Replace with actual user ID

    try {
      await api.post(`/comments/question/${questionId}`, { body, userId });
      setBody('');
      onCommentSubmitted();
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col text-sm">
      <h3 className="font-bold">Your Comment</h3>
      <textarea
        className="border my-2 rounded p-2"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      ></textarea>
      <div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 px-2.5 py-1.5 rounded text-white">Post Comment</button>
      </div>
    </form>
  );
};
