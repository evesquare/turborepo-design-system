import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@acme/ui";

export default function Home() {
  return (
    <main className={styles.main}>
      <Button>test</Button>
    </main>
  );
}
