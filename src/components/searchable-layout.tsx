export default function SearchableLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>임시서치바</div>
      {children}
    </div>
  );
}
