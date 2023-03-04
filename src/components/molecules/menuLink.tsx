import Link, { LinkType } from '@/molecules/link';

interface Props extends LinkType {}

export default function MenuLink(props: Props) {
  return (
    <li className={props?.className}>
      <Link {...props}>{props?.children}</Link>
    </li>
  );
}