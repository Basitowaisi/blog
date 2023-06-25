export const metadata = {
  title: "Basit's Content Studio",
  description: "Basit's Content Studio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
