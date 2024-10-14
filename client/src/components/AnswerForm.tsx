import React, { useState } from 'react';
import api from '../services/api';
import { useAuth } from '../hooks/useAuth';

interface AnswerFormProps {
  questionId: number;
  onAnswerSubmitted: () => void;
}

const AnswerForm: React.FC<AnswerFormProps> = ({ questionId, onAnswerSubmitted  }) => {
  const [body, setBody] = useState('');
  const { user } = useAuth();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const userId = user?.id;

    try {
      await api.post(`/answers/`, { body, userId, questionId });
      setBody('');
      onAnswerSubmitted();
    } catch (error) {
      console.error('Error submitting answer:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col text-sm">
      <h3 className="font-bold">Your Answer</h3>
      <textarea
        className="border my-2 rounded p-2"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      ></textarea>
      <div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 px-2.5 py-1.5 rounded text-white">Post Answer</button>
      </div>
    </form>
  );
};

export default AnswerForm;
