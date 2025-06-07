
export function Badge({ children, variant }) {
  const base = "inline-block px-2 py-1 rounded text-xs font-semibold";
  const style = variant === "outline"
    ? "border border-green-700 text-green-700"
    : "bg-green-600 text-white";
  return <span className={`${base} ${style}`}>{children}</span>;
}
