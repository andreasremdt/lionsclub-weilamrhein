import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/About.module.css';

export default function Page() {
  return (
    <>
      <Head>
        <title>Über Uns | Lions Club Weil am Rhein</title>
      </Head>

      <main className="card">
        <h1>Über Uns</h1>
        <p>
          Unser Club hat sich 2006 gegründet. Wir treffen uns zwei Mal im Monat. Wir fühlen uns dem
          Lions-Grundsatz „We serve“ verpflichtet und unterstützen deshalb mit unseren
          Benefizaktionen eine Reihe von sozialen Projekten in Stadt und Region. Es liegt uns dabei
          besonders am Herzen, die Chancen benachteiligter Kinder und Jugendlicher zu verbessern.
          Wir sind sozial engagiert, international, pflegen die Geselligkeit und vereinen Mitglieder
          der unterschiedlichsten Berufe – von Unternehmern über Ärzte bis zu Lehrern. Stolz sind
          wir auch auf unsere „Leos“, den sehr aktiven Clubnachwuchs.
        </p>
      </main>

      <section className="card">
        <h2>Unser Vorstand</h2>

        <div className={styles.members}>
          <article className={styles.member}>
            <Image
              src="/member.jpg"
              alt="John Doe"
              width={300}
              height={400}
              layout="responsive"
              className={styles.image}
            />
            <h3 className={styles.title}>John Doe</h3>
            <p className={styles.role}>President</p>
            <p className={styles.location}>Weil am Rhein, Deutschland</p>
          </article>

          <article className={styles.member}>
            <img src="https://via.placeholder.com/300x400" />
            <h3 className={styles.title}>John Doe</h3>
            <p className={styles.role}>President</p>
            <p className={styles.location}>Weil am Rhein, Deutschland</p>
          </article>

          <article className={styles.member}>
            <img src="https://via.placeholder.com/300x400" />
            <h3 className={styles.title}>John Doe</h3>
            <p className={styles.role}>President</p>
            <p className={styles.location}>Weil am Rhein, Deutschland</p>
          </article>

          <article className={styles.member}>
            <img src="https://via.placeholder.com/300x400" />
            <h3 className={styles.title}>John Doe</h3>
            <p className={styles.role}>President</p>
            <p className={styles.location}>Weil am Rhein, Deutschland</p>
          </article>
        </div>
      </section>

      <section className="card">
        <h2>Unsere Mitglieder</h2>
      </section>
    </>
  );
}
