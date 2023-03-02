import Container from '@/atoms/containers/container';
import AuthNav from '@/organisms/auth-nav/authNav';
import Footer from '@/organisms/footer/footer';
import Navigation from '@/organisms/main-nav/mainNav';

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
