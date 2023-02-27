import Container from '@/atoms/containers/container';
import Footer from '@/organisms/footer/footer';
import AuthNav from '@/organisms/navs/auth-nav/authNav';
import Navigation from '@/organisms/navs/main-nav/mainNav';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthNav />
      <Navigation />
      <main>
        <Container maxWidth="2xl">{children}</Container>
      </main>
      <Footer />
    </>
  );
}
