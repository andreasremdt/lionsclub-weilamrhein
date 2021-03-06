import Link from 'next/link';
import Button from './button';
import styles from './navigation.module.css';

export default function Navigation() {
  return (
    <nav className={[styles.wrapper, 'container'].join(' ')}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/">
            <a>
              <span className={styles.title}>Startseite</span>
              Aktuelle Neuigkeiten
            </a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/activities/">
            <a>
              <span className={styles.title}>Activities</span>
              Unsere Aktionen
            </a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/projekte/">
            <a>
              <span className={styles.title}>Projekte</span>
              Langfristiges Engagment
            </a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/ueber-uns/">
            <a>
              <span className={styles.title}>Über Uns</span>
              Unser Club
            </a>
          </Link>
          <ul className={styles.dropdown}>
            <li className={styles.item}>
              <Link href="/ueber-uns/">
                <a>
                  <span className={styles.title}>Der Lions Club</span>
                  Erfahren Sie mehr über unsere Arbeit
                </a>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="/ueber-uns/mitglieder/">
                <a>
                  <span className={styles.title}>Mitglieder</span>
                  Lernen Sie unsere Mitglieder kennen
                </a>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="/ueber-uns/links/">
                <a>
                  <span className={styles.title}>Links</span>
                  Links zu Partnern und anderen Organisationen
                </a>
              </Link>
            </li>
          </ul>
        </li>
        <li className={styles.item}>
          <Link href="/kontakt/">
            <a>
              <span className={styles.title}>Kontakt</span>
              Schreiben Sie Uns
            </a>
          </Link>
        </li>
      </ul>

      <Link href="/spenden/" passHref>
        <Button variant="primary">Spenden</Button>
      </Link>
    </nav>
  );
}
