
export function ScrollArea({ children, className }) {
  return (
    <div className={`overflow-y-auto border rounded p-2 bg-white ${className || ''}`}>
      {children}
    </div>
  );
}
