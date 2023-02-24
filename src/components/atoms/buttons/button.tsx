import styles from "./button.module.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button(props: Props) {
  const variantClass = props?.variant || "primary";

  const joinedClasses = [
    styles.button,
    props?.className,
    styles[variantClass],
  ].join(" ");
  const buttonProps = { ...props, className: joinedClasses };
  return <button {...buttonProps}>{props?.children}</button>;
}
