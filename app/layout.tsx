import './globals.css'

export const metadata = {
  title: 'HippoFinance.africa - Digital Microfinance Solutions',
  description: 'Empowering businesses and individuals across Africa with innovative credit solutions, device financing for Starlink, and comprehensive SME lending services.',
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
