// Root Layout: https://beta.nextjs.org/docs/routing/pages-and-layouts#root-layout-required
import "@/themes/global.css";
import { Lato } from "next/font/google";
import Script from "next/script";
import "normalize.css/normalize.css";

export const metadata = {
  title: "Atomic Design on Nextjs 13",
  description: "Example of how to use Atomic Design on a Nextjs 13 app",
};

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
        <Script
          src="https://d3js.org/d3.v4.min.js"
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  );
}
