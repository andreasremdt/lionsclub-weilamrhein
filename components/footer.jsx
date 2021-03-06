import Link from 'next/link';
import Logo from './logo';
import styles from './footer.module.css';

const Footer = () => (
  <footer className={styles.wrapper}>
    <div className="container">
      <Logo variant="light" size="small" className={styles.logo} />

      <nav>
        <Link href="/kontakt/">
          <a className={styles.link}>Kontakt</a>
        </Link>
        <Link href="/datenschutz/">
          <a className={styles.link}>Datenschutz</a>
        </Link>
        <Link href="/impressum/">
          <a className={styles.link}>Impressum</a>
        </Link>
        <Link href="/sitemap/">
          <a className={styles.link}>Sitemap</a>
        </Link>
      </nav>

      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Lions Club Weil am Rhein. Alle Rechte vorbehalten.
      </p>
    </div>
  </footer>
);

export default Footer;
