import { useState, useEffect } from "react";
import { NotepadList, Notepad } from "../components/NotepadList";

async function pegaNotepads() {
  const res = await fetch("https://webservices.jumpingcrab.com/notepads", {
    method: "get",
  });
  const notepads = await res.json();
  return notepads;
}
const initialNotepads: Notepad[] = [];

export function Home() {
  const [notepads, setNotepads] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const textoCarregando = isLoading ? "careggando..." : "";

  useEffect(() => {
    setIsLoading(true);
    pegaNotepads().then((notepads) => {
      setNotepads(notepads);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    alert("isLoading é igual a: ${isLoading}");
  }, [isLoading]);

  return (
    <div>
      <div>{textoCarregando}</div>
      <NotepadList notepads={notepads} />
    </div>
  );
}

export {};
