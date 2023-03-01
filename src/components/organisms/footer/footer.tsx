import Container from "@/atoms/containers/container";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container maxWidth="2xl">footer</Container>
    </footer>
  );
}
