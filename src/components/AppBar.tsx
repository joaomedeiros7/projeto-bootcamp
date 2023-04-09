import React from "react";
import { LinkButton } from "./LinkButton";
import { Link } from "react-router-dom";

export function AppBar() {
  return (
    <header className="bg-white shadow-md flex flex-row items-center justify-between">
      <Link to="/">
        <img src="/logo.png" alt="logorato" />
      </Link>
      <div>Sou uma AppBar</div>
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
