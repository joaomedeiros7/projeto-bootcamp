import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Breadcrumbs } from "../components/Breadcrumbs";
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
    <div className="md:bg-white w-full pd-4 md:max-w-screen-md md:mx-auto md:m-8 md:rounded-lg md:shadow-lg flex flex-col">
      <Breadcrumbs
        links={[
          { title: "pagina inicial", link: "/" },
          { title: notepad.title, link: "/publicacoes/${params.id}" },
        ]}
      ></Breadcrumbs>
      <button
        className="bg-pink-700 hover:bg-pink-800"
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

      <span className="text-gray-500 my-2">#{notepad.id}</span>

      <time className="text-gray-500 text-sm" dateTime={notepad.created_at}>
        {new Date(notepad.created_at).toLocaleDateString()}
      </time>

      <h1 className="text-2xl font-bold">{notepad.title}</h1>

      <p className="mb-4">{notepad.subtitle}</p>

      <p>{notepad.content}</p>
    </div>
  );
}
