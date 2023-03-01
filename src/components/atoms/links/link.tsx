import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import styles from './link.module.css';

export type LinkType = NextLinkProps & React.HTMLAttributes<HTMLAnchorElement>;

export default function Link(props: LinkType) {
  return (
    <NextLink {...props} passHref legacyBehavior>
      <a className={styles.link}>{props?.children}</a>
    </NextLink>
  );
}
