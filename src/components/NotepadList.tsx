const notepads = [
  {
    id: 1,
    title: "Um titulo 1",
    subtitle: "um subtitulo 1",
  },

  {
    id: 2,
    title: "Um titulo 2",
    subtitle: "um subtitulo 2",
  },

  {
    id: 3,
    title: "Um titulo 3",
    subtitle: "um subtitulo 3",
  },
  {
    id: 4,
    title: "Um titulo 4",
    subtitle: "um subtitulo 4 ",
  },
];

export function NotepadList() {
  return (
    <ul>
      {notepads.map((notepadAtual) => {
        return (
          <li key={notepadAtual.id} className="mb-2">
            <h2 className="font-bold text-lg">{notepadAtual.title}</h2>
            <p>{notepadAtual.subtitle}</p>
          </li>
        );
      })}
    </ul>
  );
}
