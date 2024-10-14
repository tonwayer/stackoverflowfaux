import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import {QuestionList, Question} from '../components/QuestionList';

const HomePage: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    axios.get<Question[]>('/questions')
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching questions:', error);
      });
  }, []);
  return (
    <div>
      <QuestionList questions={questions} />
    </div>
  );
};

export default HomePage;
