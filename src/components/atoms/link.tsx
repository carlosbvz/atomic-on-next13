import NextLink, { LinkProps as NextLinkProps } from "next/link";

export interface LinkProps extends NextLinkProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const linkStyle = {
  textDecoration: "none",
};

export default function Link(props: LinkProps) {
  const style = { ...props.style, ...linkStyle };
  return (
    <NextLink style={style} {...props}>
      {props?.children}
    </NextLink>
  );
}
