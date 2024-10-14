import { ReactElement, useEffect, useState } from "react";
import { AuthContext, AuthContextType } from "./AuthContext";
import { User } from "../types";
import api from "../services/api";

interface AuthProviderProps {
  children: ReactElement;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? (JSON.parse(storedUser) as User) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const signIn = async (userId: string) => {
    if (userId) {
      api.get(`/users/${userId}`)
        .then((response) => {
          setUser(response.data);
        }).catch((error) => {
          alert('user not found')
        });
    } else {
      alert('userId is required')
    }
  };

  const signUp = async (name: string) => {
    if (name) {
      api.post('/users', { name })
      .then((response) => {
        setUser(response.data);
      }).catch((error) => {
        alert(error.message);
      });
     } else {
      alert('userId is required')
    }
  };
  const signOut = () => {
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    signIn,
    signOut,
    signUp
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
