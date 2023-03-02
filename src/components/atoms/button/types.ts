export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary";
  variant?: "contained" | "outlined" | "text";
}
