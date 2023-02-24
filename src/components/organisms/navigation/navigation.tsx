import Logo from "@/atoms/logo";
import Menu from "@/atoms/menu/menu";
import MenuLink from "@/atoms/menuLink";
import Search from "@/molecules/search";
import { Lato } from "@next/font/google";
import styles from "./navigation.module.css";

const latoBold = Lato({ weight: "700", subsets: ["latin"] });

type Props = {};

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

// TODO: Move text to a translation file
function MenuWrapper() {
  return (
    <div className={styles["menu-wrapper"]}>
      <Menu className={styles["menu"]}>
        <StyledMenuLink href="/">Home</StyledMenuLink>
        <StyledMenuLink href="/education">Education</StyledMenuLink>
        <StyledMenuLink href="/nutrition">Nutrition</StyledMenuLink>
      </Menu>
      <Search />
    </div>
  );
}

export default function Navigation(props: Props) {
  return (
    <nav className={styles.nav}>
      <Logo />
      <MenuWrapper />
    </nav>
  );
}
