import Logo from "@/atoms/logo";
import Menu from "@/atoms/menu";
import MenuLink from "@/atoms/menuLink";
import Search from "@/molecules/search";

type Props = {};

const navStyles = {
  display: "flex",
  padding: "64px 16px",
  justifyContent: "space-between",
};
const menuWrapperStyles = {
  display: "flex",
};
const menuStyles = {
  display: "flex",
};
const menuLinkStyles = {
  marginRight: "16px",
};

function MenuWrapper() {
  return (
    <div style={menuWrapperStyles}>
      <Menu style={menuStyles}>
        <MenuLink style={menuLinkStyles} href="/">
          Home
        </MenuLink>
        <MenuLink style={menuLinkStyles} href="/education">
          Education
        </MenuLink>
        <MenuLink style={menuLinkStyles} href="/nutrition">
          Nutrition
        </MenuLink>
      </Menu>
      <Search />
    </div>
  );
}

export default function Navigation(props: Props) {
  return (
    <nav style={navStyles}>
      <Logo />
      <MenuWrapper />
    </nav>
  );
}
