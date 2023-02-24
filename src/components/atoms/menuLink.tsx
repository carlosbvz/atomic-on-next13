import Link, { LinkProps } from "@/atoms/link/link";

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
