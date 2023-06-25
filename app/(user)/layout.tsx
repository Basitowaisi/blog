import Banner from "@/components/Banner"
import Header from "@/components/Header"

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
      <body className="max-w-7xl mx-auto">
        <Header />
        <Banner />

        {children}
      </body>
    </html>
  )
}
