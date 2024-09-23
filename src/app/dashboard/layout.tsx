export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div> Company Header </div>
      <nav></nav>

      {children}
    </section>
  );
}
