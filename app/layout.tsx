import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ლილე — თქვენი მყუდრო კუთხე ქობულეთში",
  description: "საოჯახო სასტუმრო ქობულეთში, ფიჭვნარში ზღვის მახლობლად. მყუდრო გარემო, ტელევიზორითა და პარკინგით. იდეალურია ოჯახური დასვენებისთვის.",
  keywords: "სასტუმრო ქობულეთში, საოჯახო სასტუმრო, ფიჭვნარი, ზღვა, დასვენება, ლილე, hotel kobuleti",
  openGraph: {
    title: "ლილე — საოჯახო სასტუმრო ქობულეთში",
    description: "მყუდრო სასტუმრო ფიჭვნარში, ზღვიდან 5 წუთში",
    type: "website",
    locale: "ka_GE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">
      <body className="antialiased">{children}</body>
    </html>
  );
}
