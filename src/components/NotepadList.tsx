type notepad = {
  id: number;
  title: string;
  subtitle: string;
};

export type NotepadListProps = {
  notepads: notepad[];
};

export function NotepadList({ notepads }: NotepadListProps) {
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
