import React from "react";
import { LinkButton } from "./LinkButton";
import { Link } from "react-router-dom";

export function AppBar() {
  return (
    <header className="bg-white shadow-md flex flex-row items-center justify-between p-2 sticky top-0 left-0">
      <div className="flex flex-row items-center gap-2">
        <Link to="/" className="flex flex-row items-center gap-2">
          <img src="/logorato.png" alt="logorato" className="h-[40px]" />
          <h1 className="font-bold uppercase text-lg"> Pastebin </h1>
        </Link>
        <Link
          to="/"
          className="text-blue-400 hover:text-blue-500 font-bold text-sm hidden md:block"
        ></Link>
      </div>
      <div className="flex flex-row items-center gap-2">
        <button
          onClick={() => {
            window.location.href = "/criar-notepad";
            alert("fui clicado");
          }}
        >
          Criar Notepad
        </button>
      </div>
    </header>
  );
}
