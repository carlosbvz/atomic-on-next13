export interface Props {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const menuStyle = {
  listStyle: "none",
  margin: 0,
  padding: 0,
};

export default function Menu(props: Props) {
  const style = { ...menuStyle, ...props.style };
  return <ul style={style}>{props?.children}</ul>;
}
