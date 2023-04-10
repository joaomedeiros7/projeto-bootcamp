type ButtonProps = {
  children: string;
  onClick: () => void;
  className?: string;
};

export function Button(props: ButtonProps) {
  return (
    <button
      className={
        "bg-green-800 hover:bg-yellow-800 text-black py-2 px-3 rounded-md font-bold text-sm shadow-lg ${props.className}"
      }
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
