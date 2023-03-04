"use client";

import NextLink, { LinkProps } from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: var(--blue);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export type LinkType = LinkProps & React.HTMLAttributes<HTMLAnchorElement>;

export default function Link(props: LinkType) {
  return (
    <NextLink {...props} passHref legacyBehavior>
      <StyledLink>{props?.children}</StyledLink>
    </NextLink>
  );
}
