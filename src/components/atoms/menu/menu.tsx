import styles from "./menu.module.css";

export interface Props {
  children?: React.ReactNode;
  className?: string;
}

export default function Menu(props: Props) {
  const joinedClassNames = [styles["menu"], props?.className].join(" ");
  const menuProps = { ...props, className: joinedClassNames };
  return <ul {...menuProps}>{props?.children}</ul>;
}
