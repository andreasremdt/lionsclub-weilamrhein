import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Card from '../../components/card';
import Breadcrumbs from '../../components/breadcrumbs';
import Title from '../../components/title';
import Container from '../../components/container';
import styles from './index.module.css';

const Page = () => (
  <>
    <Head>
      <title>Unsere Activities</title>
    </Head>
    <Container>
      <Card Tag="main">
        <Breadcrumbs
          entries={[
            { href: '/', title: 'Startseite' },
            { href: '/activities/', title: 'Activities' },
          ]}
        />
        <Title>Unsere Activities</Title>
        <p>
          Wir legen Wert auf nachhaltige Unterstützung von Projekten, die gerade im nahen Umfeld
          aufgebaut worden sind. Deshalb werden die von den Mitgliedern durch Activities
          aufgebrachten Mittel an soziale Organisationen und Projekte zur Verfügung gestellt. Hier
          finden Sie ausführlichere Berichte sowie Fotos über unsere Activities.
        </p>
      </Card>
    </Container>

    <Card className={styles.overview}>
      <Container>
        <Title Tag="h2" underline inverted>
          Alle Activities
        </Title>

        <div className={styles.grid}>
          <article className={styles.card}>
            <Link href="/activities/lions-helfen/">
              <a>
                <Image src="/IMG_1582.jpg" width="400" height="270" />
                <span className={styles.meta}>Neuigkeiten</span>
                <h3 className={styles.title}>Lions helfen in 2020 trotz Corona</h3>
                <time dateTime="2021-01-20" className={styles.date}>
                  20. Januar 2021
                </time>
                <p>
                  Das Jahr 2020 war aufgrund der Pandemie bekanntermaßen ein schwieriges Jahr.
                  Persönliche Treffen, die üblichen Aktionen...
                </p>
              </a>
            </Link>
          </article>
          <article className={styles.card}>
            <Link href="/activities/lions-helfen/">
              <a>
                <Image src="/IMG_1582.jpg" width="400" height="270" />
                <span className={styles.meta}>Neuigkeiten</span>
                <h3 className={styles.title}>Lions helfen in 2020 trotz Corona</h3>
                <time dateTime="2021-01-20" className={styles.date}>
                  20. Januar 2021
                </time>
                <p>
                  Das Jahr 2020 war aufgrund der Pandemie bekanntermaßen ein schwieriges Jahr.
                  Persönliche Treffen, die üblichen Aktionen...
                </p>
              </a>
            </Link>
          </article>
          <article className={styles.card}>
            <Link href="/activities/lions-helfen/">
              <a>
                <Image src="/IMG_1582.jpg" width="400" height="270" />
                <span className={styles.meta}>Neuigkeiten</span>
                <h3 className={styles.title}>Lions helfen in 2020 trotz Corona</h3>
                <time dateTime="2021-01-20" className={styles.date}>
                  20. Januar 2021
                </time>
                <p>
                  Das Jahr 2020 war aufgrund der Pandemie bekanntermaßen ein schwieriges Jahr.
                  Persönliche Treffen, die üblichen Aktionen...
                </p>
              </a>
            </Link>
          </article>
          <article className={styles.card}>
            <Link href="/activities/lions-helfen/">
              <a>
                <Image src="/IMG_1582.jpg" width="400" height="270" />
                <span className={styles.meta}>Neuigkeiten</span>
                <h3 className={styles.title}>Lions helfen in 2020 trotz Corona</h3>
                <time dateTime="2021-01-20" className={styles.date}>
                  20. Januar 2021
                </time>
                <p>
                  Das Jahr 2020 war aufgrund der Pandemie bekanntermaßen ein schwieriges Jahr.
                  Persönliche Treffen, die üblichen Aktionen...
                </p>
              </a>
            </Link>
          </article>
          <article className={styles.card}>
            <Link href="/activities/lions-helfen/">
              <a>
                <Image src="/IMG_1582.jpg" width="400" height="270" />
                <span className={styles.meta}>Neuigkeiten</span>
                <h3 className={styles.title}>Lions helfen in 2020 trotz Corona</h3>
                <time dateTime="2021-01-20" className={styles.date}>
                  20. Januar 2021
                </time>
                <p>
                  Das Jahr 2020 war aufgrund der Pandemie bekanntermaßen ein schwieriges Jahr.
                  Persönliche Treffen, die üblichen Aktionen...
                </p>
              </a>
            </Link>
          </article>
        </div>
      </Container>
    </Card>
  </>
);

export default Page;
