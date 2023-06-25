import "./globals.css"

export const metadata = {
  title: "Basit's Blog",
  description: "Basit's Blog App",
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
