import styles from "./button.module.css";
import { ButtonProps } from "./types";

export default function Button(props: ButtonProps) {
  const colorClass = props?.color || "primary";
  const variantClass = props?.variant || "text";

  const joinedClasses = [
    styles.button,
    props?.className,
    styles[colorClass],
    styles[variantClass],
  ].join(" ");

  const buttonProps = { ...props, className: joinedClasses };
  return (
    <>
      <button {...buttonProps}>{props?.children}</button>
    </>
  );
}
