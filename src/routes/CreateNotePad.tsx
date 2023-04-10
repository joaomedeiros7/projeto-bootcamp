import { useState } from "react";
import { TextField } from "../components/TextField";
import { TextArea } from "../components/TextArea";

export function CreateNotepad() {
  const [nome, setNome] = useState("");

  return (
    <div>
      <h1 className="text-center text-2x1 font-bold my-4">Crie seu notepad!</h1>
      <form className="flex flex-col gap-2 mx-2 md:mx-auto md:max-w-screen-md">
        event.preventDefault(); alert('feito!')
        <TextField
          placeholder="digite o titulo"
          value={nome}
          onChange={(nome) => setNome(nome)}
        />
        <TextField
          placeholder="digite o subtitulo"
          value={nome}
          onChange={(nome) => setNome(nome)}
        />
        <TextArea
          placeholder="digite o conteúdo"
          value={nome}
          onChange={(nome) => setNome(nome)}
        />
        <button
          type="submit"
          className="bg-green-800 hover:bg-yellow-800 text-black py-2 px-3 rounded-md font-bold text-sm shadow-lg"
          noValidate
          onSubmit={(event) => {}}
        >
          enviar
        </button>
      </form>
    </div>
  );
}
