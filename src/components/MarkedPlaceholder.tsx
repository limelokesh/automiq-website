interface MarkedPlaceholderProps {
  label: string;
}

export function MarkedPlaceholder({label}: MarkedPlaceholderProps) {
  return (
    <span className="inline-block border-b border-dashed border-[#1A1816]/45 pb-0.5 text-[#2E2B29]/75">
      [{label}]
    </span>
  );
}
