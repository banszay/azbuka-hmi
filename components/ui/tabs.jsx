
import { useState } from 'react';

export function Tabs({ defaultValue, children }) {
  const [value, setValue] = useState(defaultValue);
  return (
    <div data-tabs value={value}>
      {children.map(child => {
        if (child.type.name === 'TabsList') return child;
        if (child.type.name === 'TabsContent') return child.props.value === value ? child : null;
        return null;
      })}
    </div>
  );
}
export function TabsList({ children }) {
  return <div className="flex gap-2 mb-2">{children}</div>;
}
export function TabsTrigger({ value, children }) {
  return (
    <button className="px-4 py-1 rounded border" onClick={() => document.querySelector('[data-tabs]').setAttribute('value', value)}>
      {children}
    </button>
  );
}
export function TabsContent({ value, children }) {
  return <div>{children}</div>;
}
