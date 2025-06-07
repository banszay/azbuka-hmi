
export function Button({ children, variant, size, className }) {
  const base = "rounded px-4 py-1 font-semibold";
  const variants = {
    destructive: "bg-red-600 text-white hover:bg-red-700",
    default: "bg-green-600 text-white hover:bg-green-700"
  };
  const sizes = {
    sm: "text-sm",
    md: "text-base"
  };
  return <button className={`${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${className || ''}`}>{children}</button>;
}
