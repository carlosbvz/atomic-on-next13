"use client";

import Container from '@/atoms/container';
import Logo from '@/atoms/logo';
import Menu from '@/molecules/menu';
import MenuLink from '@/molecules/menuLink';
import Search from '@/molecules/search';
import { Lato as latoFont } from 'next/font/google';
import styled from 'styled-components';
import styles from './mainNav.module.css';

const latoBold = latoFont({ weight: "700", subsets: ["latin"] });
const linksData = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/technologies", label: "Technologies" },
  { href: "/people", label: "People" },
];

const StyledMenuWrapper = styled.div`
  border-bottom: 1px solid var(--lightGray);
`;

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

export default function Navigation() {
  return (
    <StyledMenuWrapper>
      <Container maxWidth="2xl">
        <nav className={styles.nav}>
          <Logo />
          <MenuWrapper />
        </nav>
      </Container>
    </StyledMenuWrapper>
  );
}
