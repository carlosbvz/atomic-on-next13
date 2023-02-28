import Container from "@/atoms/containers/container";
import Logo from "@/atoms/logos/logo";
import Menu from "@/atoms/menu/menu";
import MenuLink from "@/atoms/menu/menuLink";
import Search from "@/molecules/search/search";
import { Lato } from "next/font/google";
import styles from "./mainNav.module.css";

const latoBold = Lato({ weight: "700", subsets: ["latin"] });
const linksData = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/technologies", label: "Technologies" },
  { href: "/people", label: "People" },
];
type NavigationType = {};

function StyledMenuLink(props: { href: string; children?: React.ReactNode }) {
  const { href, children } = props;
  return (
    <MenuLink
      className={`${styles["menu-links"]} ${latoBold.className}`}
      href={href}
    >
      {children}
    </MenuLink>
  );
}

function MenuWrapper() {
  return (
    <div className={styles["menu-wrapper"]}>
      <Menu className={styles["menu"]}>
        {linksData.map((link) => (
          <StyledMenuLink key={link.href} href={link.href}>
            {link.label}
          </StyledMenuLink>
        ))}
      </Menu>
      <Search />
    </div>
  );
}

export default function Navigation(props: NavigationType) {
  return (
    <div className={styles["nav-wrapper"]}>
      <Container maxWidth="2xl">
        <nav className={styles.nav}>
          <Logo />
          <MenuWrapper />
        </nav>
      </Container>
    </div>
  );
}
