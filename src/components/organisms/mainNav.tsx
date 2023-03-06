"use client";

import Container from "@/atoms/container";
import Logo from "@/atoms/logo";
import Menu from "@/molecules/menu";
import MenuLink from "@/molecules/menuLink";
import Search from "@/molecules/search";
import { Lato as latoFont } from "next/font/google";
import styled from "styled-components";

interface LinkType {
  href: string;
  label: string;
}

const latoBold = latoFont({ weight: "700", subsets: ["latin"] });

const StyledNav = styled.nav`
  display: flex;
  padding: 16px;
  justify-content: space-between;
`;
const StyledNavWrapper = styled.div`
  border-bottom: 1px solid var(--lightGray);
`;
const StyledMenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const StyledMenu = styled(Menu)`
  display: flex;
  align-items: center;
`;
const StyledMenuLink = styled(MenuLink)`
  margin-right: 16px;
  font-size: 18px;
  ${latoBold.style}
  a {
    font-size: 1.25em;
    color: var(--black);
    :hover {
      text-decoration: none;
      color: var(--blue);
    }
  }
`;

function MenuWrapper({ links }: { links: LinkType[] }) {
  return (
    <StyledMenuWrapper>
      <StyledMenu>
        {links.map((link) => (
          <StyledMenuLink key={link.href} href={link.href}>
            {link.label}
          </StyledMenuLink>
        ))}
      </StyledMenu>
      <Search />
    </StyledMenuWrapper>
  );
}

export default function Navigation({ links }: { links: LinkType[] }) {
  return (
    <StyledNavWrapper>
      <Container maxWidth="2xl">
        <StyledNav>
          <Logo />
          <MenuWrapper links={links} />
        </StyledNav>
      </Container>
    </StyledNavWrapper>
  );
}
