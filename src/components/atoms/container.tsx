export interface ContainerProps {
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl";
  children?: React.ReactNode;
}

const sharedStyles = {
  margin: "0 auto",
};
const containerStyle = {
  sm: {
    maxWidth: "640px",
  },
  md: {
    maxWidth: "768px",
  },
  lg: {
    maxWidth: "975px",
  },
  xl: {
    maxWidth: "1280px",
  },
  "2xl": {
    maxWidth: "1536px",
  },
};

export default function Container(props: ContainerProps = {}) {
  const { maxWidth, children } = props;
  const style = { ...containerStyle[maxWidth || "xl"], ...sharedStyles };

  return <div style={style}>{children}</div>;
}
