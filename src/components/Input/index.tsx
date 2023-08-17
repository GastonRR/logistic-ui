interface Props {
  name: string;
  label: string;
  id?: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  id,
  name,
  label,
  placeholder,
  type,
  value,
  onChange,
}: Props) => {
  return (
    <div className="relative">
      <label
        htmlFor="name"
        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type={type ? type : "text"}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder ? placeholder : ""}
        id={id ? id : name}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  );
};
