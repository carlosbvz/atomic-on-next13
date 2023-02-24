// Root Layout: https://beta.nextjs.org/docs/routing/pages-and-layouts#root-layout-required

import Container from "@/atoms/containers/container";
import Footer from "@/organisms/footer/footer";
import Navigation from "@/organisms/navigation/navigation";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main>
        <Container maxWidth="2xl">{children}</Container>
      </main>
      <Footer />
    </>
  );
}
