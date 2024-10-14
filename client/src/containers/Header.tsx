import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return <header className="flex h-14 w-full flex-shrink-0 justify-center bg-accent">
    <div className="container flex h-full items-center px-4 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight">
        <Link to="/">
          Sayari Knowledge Sharing Center
        </Link>
      </h1>
    </div>
  </header>
}
