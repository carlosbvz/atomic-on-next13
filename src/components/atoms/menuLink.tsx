import Link, { LinkProps } from "@/atoms/link";

interface Props extends LinkProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const menuLinkStyles = {
  textDecoration: "none",
};

export default function MenuLink(props: Props) {
  const style = { ...props.style, ...menuLinkStyles };
  return (
    <li style={style}>
      <Link {...props} style={{ textDecoration: "none" }}>
        {props?.children}
      </Link>
    </li>
  );
}
