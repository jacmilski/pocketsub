export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <aside>Aside nav</aside>
      <main>{children}</main>
    </div>
  );
}
