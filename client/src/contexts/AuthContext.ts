import { createContext } from 'react';
import { User } from '../types';

export interface AuthContextType {
  user: User | null;
  signIn: (userId: string) => Promise<void>;
  signOut: () => void;
  signUp: (name: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
