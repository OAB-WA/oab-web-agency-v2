import Link from "next/link";
import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className="container">
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.errorTitle}>Page Not Found</h2>
        <p className={styles.errorMessage}>
          The page you are looking for has been moved or deleted.
        </p>
        <Link href="/" className="btn-primary button">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

