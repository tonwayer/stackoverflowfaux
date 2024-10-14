import { Link } from 'react-router-dom';

export interface Question {
  id: number;
  title: string;
  creation: string;
  user: {
    id: number;
    name: string;
  };
}

interface Props {
  questions: Question[]
}

export const QuestionList = ({ questions }: Props) => {

  return (
    <div>
      {questions.map((question) => (
        <div key={question.id}>
          <h2>
            <Link to={`/questions/${question.id}`}>{question.title}</Link>
          </h2>
          <p>Asked by <Link to={`/users/${question.user.id}`}>{question.user.name}</Link></p>
          <p>{new Date(question.creation).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};
