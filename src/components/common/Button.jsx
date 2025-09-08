export default function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
}) {
  const base = "px-4 py-2 rounded-lg transition flex items-center gap-2 font-semibold";
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
    success: "bg-green-600 text-white hover:bg-green-700",
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
