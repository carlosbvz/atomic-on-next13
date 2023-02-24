import colors from "@/themes/colors";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import styles from "./link.module.css";

export interface LinkProps extends NextLinkProps {
  children?: React.ReactNode;
  className?: string;
}

const linkStyle = {
  textDecoration: "none",
  color: colors.black,
};

export default function Link(props: LinkProps) {
  return (
    <NextLink {...props} passHref legacyBehavior>
      <a className={styles.link}>{props?.children}</a>
    </NextLink>
  );
}
