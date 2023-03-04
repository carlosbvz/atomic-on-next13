"use client";

import styled from 'styled-components';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary";
  variant?: "contained" | "outlined" | "text";
}

const StyledPrimaryTextButton = styled.button<ButtonProps>`
  background-color: transparent;
  border: 0;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: var(--blue);
  &:hover {
    color: var(--darkBlue);
    background-color: var(--blueBg);
  }
`;
const StyledSecondaryTextButton = styled.button<ButtonProps>`
  background-color: transparent;
  border: 0;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: var(--purple);
  &:hover {
    color: var(--darkPurple);
    background-color: var(--purpleBg);
  }
`;
const StyledPrimaryContainedButton = styled.button<ButtonProps>`
  background-color: var(--blue);
  border: 0;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: var(--white);
  &:hover {
    color: var(--white);
    background-color: var(--darkBlue);
  }
`;
const StyledSecondaryContainedButton = styled.button<ButtonProps>`
  background-color: var(--purple);
  border: 0;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: var(--white);
  &:hover {
    color: var(--white);
    background-color: var(--darkPurple);
  }
`;

const buttons = {
  text: {
    primary: StyledPrimaryTextButton,
    secondary: StyledSecondaryTextButton,
  },
  contained: {
    primary: StyledPrimaryContainedButton,
    secondary: StyledSecondaryContainedButton,
  },
} as {
  [key: string]: {
    [key: string]: React.FC<ButtonProps>;
  };
};

export default function Button(props: ButtonProps) {
  const variant = props?.variant || "text";
  const color = props?.color || "primary";
  const ButtonComponent = buttons?.[variant]?.[color];
  const defaultProps = { ...props, variant, color };
  return <ButtonComponent {...defaultProps}>{props?.children}</ButtonComponent>;
}
