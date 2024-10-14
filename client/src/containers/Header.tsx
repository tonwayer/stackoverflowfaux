import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Header = () => {
  const { user, signOut } = useAuth();

  return <header className="flex h-14 w-full flex-shrink-0 justify-center bg-accent">
    <div className="container flex h-full items-center px-4 sm:px-6 justify-between items-center">
      <h1 className="text-3xl font-extrabold tracking-tight">
        <Link to="/">
          Sayari Knowledge Sharing Center
        </Link>
      </h1>
      <div className="flex">
        <p className="mr-2">{user?.name}</p>
        {
          user && <button onClick={() => signOut()}>Sign Out</button>
        }
      </div>
    </div>
  </header>
}
