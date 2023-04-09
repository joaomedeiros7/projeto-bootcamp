import React from "react";
import { RiMenu4Line } from "react-icons/ri";

interface AppBarProps {
  title: string;
}

const AppBar: React.FC<AppBarProps> = ({ title }) => {
  return (
    <header>
      <nav>
        <button>
          <RiMenu4Line />
        </button>
        <h1>{title}</h1>
      </nav>
    </header>
  );
};

export default AppBar;
export {};
