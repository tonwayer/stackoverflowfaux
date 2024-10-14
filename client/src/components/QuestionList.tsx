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
    <ul className="divide-y divide-gray-200">
      {questions.map((question) => (
        <div className="py-6" key={question.id}>
          <article>
            <p className="text-base font-medium leading-6 text-gray-500">{new Date(question.creation).toLocaleString()}</p>
            <h2 className="text-2xl font-bold leading-8 tracking-tight">
              <Link to={`/questions/${question.id}`}>{question.title}</Link>
            </h2>
            <p>Asked by <Link className="font-bold" to={`/users/${question.user.id}`}>{question.user.name}</Link></p>
          </article>
        </div>
      ))}
    </ul>
  );
};
