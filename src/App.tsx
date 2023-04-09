import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AppBar } from "./components/AppBar";
import { Home } from "./routes/Home";
import { CreateNotepad } from "./routes/CreateNotePad";
import { ViewNotepad } from "./routes/ViewNotepad";

function App() {
  return (
    <BrowserRouter>
      <div>
        <AppBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/criar-notepad" element={<CreateNotepad />} />
          <Route path="/publicacoes/:id" element={<ViewNotepad />} />
        </Routes>

        <CreateNotepad />
      </div>
    </BrowserRouter>
  );
}

export default App;
