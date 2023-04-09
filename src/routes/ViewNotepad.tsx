import { useParams } from "react-router-dom";

export function ViewNotepad() {
  const params = useParams();
  return (
    <div>
      <h1>sou a pagina de visualizacao de um notepad</h1>

      <p>meu id é: {params.id}</p>
    </div>
  );
}
