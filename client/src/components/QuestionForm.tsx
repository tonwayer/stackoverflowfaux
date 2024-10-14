import React, { useState } from 'react';
import api from '../services/api';
import { useAuth } from '../hooks/useAuth';

interface QuestionFormProps {
  onQuestionSubmitted: () => void;
}

const QuestionForm: React.FC<QuestionFormProps> = ({ onQuestionSubmitted }) => {
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');
  const { user } = useAuth();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const userId = user?.id;

    try {
      await api.post(`/questions/`, { body, userId, title });
      setBody('');
      setTitle('');
      onQuestionSubmitted();
    } catch (error) {
      console.error('Error submitting question:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col text-sm">
      <h3 className="font-bold">Your Question</h3>
      <input
        className="border my-2 rounded p-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="border my-2 rounded p-2"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      ></textarea>
      <div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 px-2.5 py-1.5 rounded text-white">Post Question</button>
      </div>
    </form>
  );
};

export default QuestionForm;
