import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

const SignIn = () => {
  const [userId, setUserId] = useState('');
  const { user, signIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])

  const handleLogin = async () => {
    await signIn(userId);
  };

  return (
    <div>
      <h1 className="text-3xl">Sign In Page</h1>
      <input
        required
        className="border rounded p-2 my-5"
        placeholder="userId"
        value={userId} onChange={(e) => setUserId(e.target.value)}
      />
      <div className="flex">
        <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 px-2.5 py-1.5 rounded text-white mr-2">Login</button>
        <Link to="/signup" className="bg-blue-500 hover:bg-blue-700 px-2.5 py-1.5 rounded text-white">Creat a new user</Link>
      </div>
    </div>
  );
};

export default SignIn;
