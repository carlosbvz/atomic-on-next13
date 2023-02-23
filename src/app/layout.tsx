// Root Layout: https://beta.nextjs.org/docs/routing/pages-and-layouts#root-layout-required
import { Lato } from "@next/font/google";
import "normalize.css/normalize.css";

const lato = Lato({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={lato.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
