import { useState } from "react";
import { TextField } from "../components/TextField";

export function CreateNotepad() {
  const [nome, setNome] = useState("");

  return (
    <div>
      <h1>sou a pagina CreateNotepad</h1>
      <TextField
        placeholder="digite o seu nome"
        value={nome}
        onChange={(nome) => setNome(nome)}
      />
    </div>
  );
}
