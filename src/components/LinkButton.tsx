import { Link } from "react-router-dom";

type LinkButtonProps = {
  to: string;
  children: string;
};

export function LinkButton(props: LinkButtonProps) {
  return (
    <Link
      to={props.to}
      className="bg-blue-800 hover:bg-yellow-800 text-black py-2 px-3 rounded-md font-bold text-sm shadow-lg"
    >
      {props.children}
    </Link>
  );
}
