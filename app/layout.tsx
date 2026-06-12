import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Доечевэллэ ХХК - Lindner брэндийн Монгол дахь төлөөлөгч",
  description:
    "2013 оноос хойш ХБНГУ-ын Lindner группын Монгол дахь албан ёсны төлөөлөгч. Өндөрлөгөөтэй шал, тааз, шилэн хана, шилэн хаалга.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mn">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
