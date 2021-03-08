import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Card from '../../components/card';
import Breadcrumbs from '../../components/breadcrumbs';
import Title from '../../components/title';
import Container from '../../components/container';
import styles from './[id].module.css';

const Page = () => (
  <>
    <Head>
      <title>Lions helfen in 2020 trotz Corona</title>
    </Head>
    <Container>
      <Card Tag="main">
        <Breadcrumbs
          entries={[
            { href: '/', title: 'Startseite' },
            { href: '/activities/', title: 'Activities' },
            { href: '/whatever/', title: 'Lions helfen in 2020 trotz Corona' },
          ]}
        />
        <Title>Lions helfen in 2020 trotz Corona</Title>
        <div className={styles.meta}>
          <Link href="/activities/">
            <a className={styles.category}>Neuigkeiten</a>
          </Link>{' '}
          - <time dateTime="2021-01-21">20. Januar 2021</time>
        </div>

        <Image src="/IMG_1582.jpg" width="828" height="500" className={styles.image} />

        <div className={styles.wrapper}>
          <p>
            Das Jahr 2020 war aufgrund der Pandemie bekanntermaßen ein schwieriges Jahr. Persönliche
            Treffen, die üblichen <a href="https://google.com">Aktionen</a>, wie unser
            Osterei-Verkauf und der seit Jahren beliebte Weihnachtsmarkt konnten nicht durchgeführt
            werden. Trotz allen Schwierigkeiten wollten wir dort behilflich sein, wo „Not am Mann
            oder der Frau“ war. In der ersten Zeit der Corona-Krise war es äußerst schwierig an FFP2
            Masken zu kommen. Hier konnten wir über Lions Deutschland helfen, indem wir
            ortsansässigen Heimen, Arzt- Physiopraxen, der Hospizgruppe, Suchtklinik etc. diese
            Masken zur Verfügung stellen konnten.
          </p>

          <blockquote>
            Nur ein Beispiel für ein direktes Zitat innerhalb des Artiteltextes.
          </blockquote>

          <p>
            Unter Mithilfe der Buchhandlung Lindow und der WWT, Weil am Rhein, konnten Boxen mit
            Lebensmitteln, Malbüchern, Stiften und Spielen gefüllt werden, die dann an die
            Beratungsstelle Kisel in Lörrach übergeben wurden, die für Kinder sucht- und
            drogenabhängiger Eltern bestimmt waren.
          </p>

          <p>
            Wie man sich gut vorstellen kann, ist die Zeit der Pandemie für die Wärmestube Weil am
            Rhein eine besondere Herausforderung. Neben andere Spendenzahlungen wurde auch die
            Wärmestube von den Lions unterstützt.
          </p>
        </div>
      </Card>
    </Container>
  </>
);

export default Page;
