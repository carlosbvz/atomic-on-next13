"use client";

import Button from '@/atoms/button';
import { signOut } from '@/services/authServices';
import styled from 'styled-components';

const StyledAuthNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 1em;
`;

export default function AuthNav() {
  return (
    <StyledAuthNav>
      <Button onClick={signOut}>Sign out</Button>
    </StyledAuthNav>
  );
}
