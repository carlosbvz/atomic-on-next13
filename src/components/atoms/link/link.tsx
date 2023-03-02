import NextLink from "next/link";
import styles from "./link.module.css";
import { LinkType } from "./types";

export default function Link(props: LinkType) {
  return (
    <NextLink {...props} passHref legacyBehavior>
      <a className={styles.link}>{props?.children}</a>
    </NextLink>
  );
}
