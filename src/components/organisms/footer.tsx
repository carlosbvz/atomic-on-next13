import Container from '@/atoms/container';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  border-top: 1px solid var(--lightGray);
  padding: 64px 16px;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Container maxWidth="2xl">footer</Container>
    </StyledFooter>
  );
}
