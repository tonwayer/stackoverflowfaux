import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const { user, signUp } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  const handleSignUp = () => {
    signUp(name);
  };

  return (
    <div>
      <h1 className="text-3xl">Sign Up Page</h1>
      <input
        required
        className="border rounded p-2 my-5"
        placeholder="username"
        value={name} onChange={(e) => setName(e.target.value)}
      />
      <div className="flex">
        <button onClick={handleSignUp} className="bg-blue-500 hover:bg-blue-700 px-2.5 py-1.5 rounded text-white mr-2">Sumbit</button>
        <Link to="/signin" className="bg-blue-500 hover:bg-blue-700 px-2.5 py-1.5 rounded text-white">Sign In</Link>
      </div>
    </div>
  );
};

export default SignUp;
