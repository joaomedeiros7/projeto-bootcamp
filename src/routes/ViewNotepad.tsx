import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import toast from "react-simple-toasts";
import { api } from "../api";

export function ViewNotepad() {
  const params = useParams();
  const navigate = useNavigate();
  const [notepad, setNotepad] = useState({
    id: params.id,
    title: "",
    subtitle: "",
    content: "",
    created_at: "",
  });

  useEffect(() => {
    api.get("/notepads/${params.id}").then((res) => {
      const notepad = res.data;
      setNotepad(notepad);
    });
  }, []);

  return (
    <div>
      <button
        onClick={async () => {
          const res = await api.delete("/notepads/${params.id}");
          const deleteNotepadResponse = res.data;

          if (deleteNotepadResponse.success) {
            toast("o notepad foi deletado com sucesso!");

            navigate("/");
          } else {
            toast("Houve um erro ao deletar o seu notepad. =( ");
          }
        }}
      ></button>

      <span>{notepad.id}</span>

      <span>{notepad.created_at}</span>

      <h1>{notepad.title}</h1>

      <p>{notepad.subtitle}</p>

      <p>{notepad.content}</p>
    </div>
  );
}
