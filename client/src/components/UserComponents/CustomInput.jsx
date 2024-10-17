import { Input } from "@material-tailwind/react";
 
export function InputCustom({ type, placeholder, name, value, onChange }) {
  return (
    <div className="">
      <Input
        type={type}
        placeholder={placeholder}
        name={name}             // Bind name for proper identification
        value={value}           // Bind value to input
        onChange={onChange}     // Bind onChange to update the state
        className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-md"
        labelProps={{
          className: "hidden",
        }}
        containerProps={{ className: "min-w-[100px]" }}
      />
    </div>
  );
}
