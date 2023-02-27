"use client";

import Button from '@/atoms/buttons/button';
import { signOut } from '@/services/auth-services/authServices';
import styles from './authNav.module.css';

type Props = {};

export default function AuthNav(props: Props) {
  console.log("Auth Nav");
  return (
    <nav className={styles.authNav}>
      <Button onClick={signOut}>Sign out</Button>
    </nav>
  );
}
