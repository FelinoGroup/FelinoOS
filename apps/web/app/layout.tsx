export const metadata = {
  title: "Felino OS",
  description: "Sistema operativo della Felino Group"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
  }
