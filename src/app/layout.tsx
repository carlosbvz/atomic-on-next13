// Root Layout: https://beta.nextjs.org/docs/routing/pages-and-layouts#root-layout-required

import Container from "@/atoms/container";
import Footer from "@/organisms/footer";
import Navigation from "@/organisms/navigation";
import "normalize.css/normalize.css";

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
      <body>
        <Container maxWidth="xl">
          <Navigation />
        </Container>

        <Container maxWidth="2xl">
          <main>{children}</main>
        </Container>

        <Container maxWidth="xl">
          <Footer />
        </Container>
      </body>
    </html>
  );
}
