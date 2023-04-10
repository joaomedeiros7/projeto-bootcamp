export type TextAreaProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

export function TextField({ value, placeholder, onChange }: TextAreaProps) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="bg-white rounded border shadow-sm p-2 text-sm outline-none focus:border-red-800 w-full"
      rows={3}
    />
  );
}
