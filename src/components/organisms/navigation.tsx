import Menu from "@/atoms/menu";
import MenuLink from "@/atoms/menuLink";
import Image from "next/image";

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

function Logo() {
  return (
    <div>
      <span>Logo</span>
    </div>
  );
}

function Search() {
  return (
    <div>
      <span>Search</span>
    </div>
  );
}

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

export default function Navigation({}: Props) {
  return (
    <nav style={navStyles}>
      <Logo />
      <MenuWrapper />
    </nav>
  );
}
