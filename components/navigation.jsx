import { useState } from 'react';
import Link from 'next/link';
import Button from './button';
import styles from './navigation.module.css';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div aria-hidden="true" className={styles['top-logo']} />
      <nav className={styles.wrapper}>
        <ul className={[styles.list, !isVisible ? styles.hidden : null].join(' ')}>
          <li className={styles.item}>
            <Link href="/">
              <a className={styles.link}>
                <span className={styles.title}>Startseite</span>
                <span className={styles.subtitle}>Aktuelle Neuigkeiten</span>
              </a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/activities/">
              <a className={styles.link}>
                <span className={styles.title}>Activities</span>
                <span className={styles.subtitle}>Unsere Aktionen</span>
              </a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/ueber-uns/">
              <a className={styles.link}>
                <span className={styles.title}>Über Uns</span>
                <span className={styles.subtitle}>Unser Club</span>
              </a>
            </Link>
            <ul className={styles.dropdown}>
              <li className={styles.item}>
                <Link href="/ueber-uns/">
                  <a className={styles.link}>
                    <span className={styles.title}>Der Lions Club</span>
                    <span className={styles.subtitle}>Erfahren Sie mehr über unsere Arbeit</span>
                  </a>
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/ueber-uns/mitglieder/">
                  <a className={styles.link}>
                    <span className={styles.title}>Mitglieder</span>
                    <span className={styles.subtitle}>Lernen Sie unsere Mitglieder kennen</span>
                  </a>
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/ueber-uns/links/">
                  <a className={styles.link}>
                    <span className={styles.title}>Links</span>
                    <span className={styles.subtitle}>
                      Links zu Partnern und anderen Organisationen
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <Link href="/kontakt/">
              <a className={styles.link}>
                <span className={styles.title}>Kontakt</span>
                <span className={styles.subtitle}>Schreiben Sie Uns</span>
              </a>
            </Link>
          </li>
          <li className={styles.button}>
            <Link href="/mitglied-werden/" passHref>
              <Button>Mitglied werden</Button>
            </Link>
          </li>
          <li>
            <Link href="/spenden/" passHref>
              <Button variant="secondary">Spenden</Button>
            </Link>
          </li>
        </ul>

        <button
          type="button"
          aria-label="Navigation öffnen/schließen"
          className={styles.toggle}
          onClick={() => setIsVisible(!isVisible)}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>
    </>
  );
};

export default Navigation;
