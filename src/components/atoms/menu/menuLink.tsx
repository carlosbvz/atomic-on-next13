import Link, { LinkProps } from "@/atoms/links/link";

interface Props extends LinkProps {
  children?: React.ReactNode;
  className?: string;
}

export default function MenuLink(props: Props) {
  return (
    <li className={props?.className}>
      <Link {...props}>{props?.children}</Link>
    </li>
  );
}
