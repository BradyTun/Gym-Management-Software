export default function InputField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div>
      {label && (
        <label className="block font-semibold text-gray-700 mb-1">{label}</label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
