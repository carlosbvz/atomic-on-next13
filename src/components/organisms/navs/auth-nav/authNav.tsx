"use client";

import Button from "@/atoms/buttons/button";
import { signOut } from "@/services/authServices";
import styles from "./authNav.module.css";

export default function AuthNav() {
  return (
    <nav className={styles.authNav}>
      <Button onClick={signOut}>Sign out</Button>
    </nav>
  );
}
