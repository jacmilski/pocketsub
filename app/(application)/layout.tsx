export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <aside>Aside nav</aside>
      <main>{children}</main>
    </div>
  );
}
