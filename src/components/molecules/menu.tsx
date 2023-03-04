"use client";

import styled from 'styled-components';

export interface Props {
  children?: React.ReactNode;
  className?: string;
}

const StyledMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export default function Menu(props: Props) {
  const menuProps = { ...props };
  return <StyledMenu {...menuProps}>{props?.children}</StyledMenu>;
}
