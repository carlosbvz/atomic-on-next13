import Container from "@/atoms/containers/container";
import styles from "./footer.module.css";

type Props = {};

export default function Footer(props: Props) {
  return (
    <footer className={styles.footer}>
      <Container maxWidth="2xl">footer</Container>
    </footer>
  );
}
