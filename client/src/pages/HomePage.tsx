import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { QuestionList, Question } from '../components/QuestionList';
import QuestionForm from '../components/QuestionForm';

const HomePage: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const fetchQuestions = async () => {
    try {
      let response;
      if (searchQuery) {
        response = await api.get<Question[]>('/search/', {
          params: { q: searchQuery },
        });
      } else {
        response = await api.get<Question[]>('/questions');
      }

      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  useEffect(() => {
    let cancel = false;

    if (!cancel) {
      fetchQuestions();
    }

    return () => {
      cancel = true;
    };
  }, [searchQuery]);

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSearchQuery(searchInput);
  };

  return (
    <div>
      <div className="flex">
        <input
          className="border rounded p-2 mr-4"
          type="text"
          placeholder="Search questions..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={handleSearchSubmit} className="bg-blue-500 hover:bg-blue-700 px-2.5 py-1.5 rounded text-white"> Search</button>
      </div>
      <QuestionList questions={questions} />
      <QuestionForm onQuestionSubmitted={fetchQuestions} />
    </div>
  );
};

export default HomePage;
