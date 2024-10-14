import React from 'react';
import { useParams } from 'react-router-dom';
import QuestionDetail from '../components/QuestionDetail';

const QuestionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      {
        id ?
          <QuestionDetail questionId={id} />
          : "Question Not Found"
      }
    </div>
  );
};

export default QuestionPage;
