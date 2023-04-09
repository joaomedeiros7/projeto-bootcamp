import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AppBar } from "./components/AppBar";
import { Home } from "./routes/Home";
import { CreateNotepad } from "./routes/CreateNotePad";

function App() {
  return (
    <BrowserRouter>
      <div>
        <AppBar />

        <CreateNotepad />
      </div>
    </BrowserRouter>
  );
}
