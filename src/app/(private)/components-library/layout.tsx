import Container from "@/atoms/containers/container";
import Menu from "@/atoms/menu/menu";
import MenuLink from "@/atoms/menu/menuLink";
import styles from "./components-library.module.css";

const componentsLinks = [
  { href: "/components-library/links", label: "Links" },
  { href: "/components-library/buttons", label: "Buttons" },
];

function SideBar() {
  return (
    <div>
      <h2>Components List</h2>
      <Menu>
        {componentsLinks.map((link) => (
          <MenuLink href={link.href} key={link.href}>
            {`-> ${link.label}`}
          </MenuLink>
        ))}
      </Menu>
    </div>
  );
}

function ShowCase(props: { children: React.ReactNode }) {
  return (
    <div>
      <h2>Showcase</h2>
      {props?.children}
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Container maxWidth="2xl">
        <div className={styles.wrapper}>
          <div className={styles.sideBar}>
            <SideBar />
          </div>
          <div className={styles.showcase}>
            <ShowCase>{children}</ShowCase>
          </div>
        </div>
      </Container>
    </main>
  );
}
