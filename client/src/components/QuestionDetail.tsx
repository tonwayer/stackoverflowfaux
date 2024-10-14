import React, { useEffect, useState } from 'react';
import api from '../services/api';
import AnswerForm from './AnswerForm';
import { CommentForm } from './CommentForm';

interface QuestionDetailProps {
  questionId: string;
}

interface Answer {
  id: number;
  body: string;
  creation: string;
  user: {
    id: number;
    name: string;
  };
}

interface Comment {
  id: number;
  body: string;
  creation: string;
  user: {
    id: number;
    name: string;
  };
}

interface Question {
  id: number;
  title: string;
  body: string;
  creation: string;
  user: {
    id: number;
    name: string;
  };
  answers: Answer[];
  comments: Comment[];
}

const QuestionDetail: React.FC<QuestionDetailProps> = ({ questionId }) => {
  const [question, setQuestion] = useState<Question | null>(null);

  const fetchQuestion = () => {
    api.get<Question>(`/questions/${questionId}`)
      .then((response) => {
        setQuestion(response.data);
      })
      .catch((error) => {
        console.error('Error fetching question:', error);
      });
  };

  useEffect(() => {
    fetchQuestion();
  }, [questionId]);

  if (!question) {
    return <div>Loading...</div>;
  }

  return (
    <div className="divide-y divide-gray-200">
      <div className="pb-6">
        <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900">{question.title}</h1>
        <p className="text-base font-medium leading-6 text-gray-500">Asked by {question.user.name} on {new Date(question.creation).toLocaleString()}</p>
      </div>
      <div className="py-6">
        <p>{question.body}</p>
        <div className="ml-3 border-t-[1px] divide-y divide-gray-200 py-2 my-2">
          {
            question.comments?.map((commnet) =>
              <div className="py-2">
                {commnet.body}
              </div>
            )
          }
          <div>
            <CommentForm questionId={question.id} onCommentSubmitted={fetchQuestion}/>
          </div>
        </div>
      </div>
      <div className="py-6">
        <h2 className="text-2xl font-bold text-gray-900">Answers</h2>
        <div className="divide-gray-200 divide-y py-2 mx-2">
          {question.answers?.map((answer) => (
            <div key={answer.id} className="py-2">
              <p>{answer.body}</p>
              <p className="text-xs text-gray-500">Answered by {answer.user.name} on {new Date(answer.creation).toLocaleString()}</p>
            </div>
          ))}
          <AnswerForm questionId={question.id} onAnswerSubmitted={fetchQuestion} />
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;
