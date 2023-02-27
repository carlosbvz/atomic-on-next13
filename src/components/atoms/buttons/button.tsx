import styles from './button.module.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary";
  variant?: "contained" | "outlined" | "text";
}

export default function Button(props: Props) {
  const colorClass = props?.color || "primary";
  const variantClass = props?.variant || "text";

  const joinedClasses = [
    styles.button,
    props?.className,
    styles[colorClass],
    styles[variantClass],
  ].join(" ");

  const buttonProps = { ...props, className: joinedClasses };
  return <button {...buttonProps}>{props?.children}</button>;
}
