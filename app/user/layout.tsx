export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
        <nav>Este es el padre de la página</nav>

        {children}
    </section>
  )
}
