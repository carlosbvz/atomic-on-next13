import Container from "@/atoms/container";
import AuthNav from "@/organisms/auth-nav/authNav";
import Navigation from "@/organisms/main-nav/mainNav";
// import Footer from "@/organisms/footer/footer";

const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/technologies", label: "Technologies" },
  { href: "/people", label: "People" },
];

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthNav />
      <Navigation links={menuLinks} />
      <main>
        <Container maxWidth="2xl">{children}</Container>
      </main>
      {/* <Footer /> */}
    </>
  );
}
