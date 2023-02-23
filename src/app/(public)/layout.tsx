// Root Layout: https://beta.nextjs.org/docs/routing/pages-and-layouts#root-layout-required

import Container from "@/atoms/container";
import Footer from "@/organisms/footer";
import Navigation from "@/organisms/navigation";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Container maxWidth="xl">
        <Navigation />
      </Container>

      <Container maxWidth="2xl">{children}</Container>

      <Container maxWidth="xl">
        <Footer />
      </Container>
    </>
  );
}
