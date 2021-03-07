import Head from 'next/head';
import Link from 'next/link';
import Card from '../../components/card';
import Breadcrumbs from '../../components/breadcrumbs';
import Title from '../../components/title';
import styles from './links.module.css';

const lionsLinks = [
  {
    url: 'https://www.lionsclubs.org/',
    title: 'Lions Clubs International',
  },
  {
    url: 'http://regio-lions.com/',
    title: 'Regio Lions im Dreiländereck',
  },
  {
    url: 'https://www.lions.de/web/lc-loerrach',
    title: 'Lions Club Lörrach',
  },
  {
    url: 'http://lionsclub-schliengen.de/',
    title: 'Lions Club Schliegen',
  },
  {
    url: 'http://lionsclubsl.free.fr/',
    title: 'Lions Club St. Louis (Frankreich)',
  },
  {
    url: 'https://basel-wenkenhof.lionsclub.ch/de/',
    title: 'Lions Club Basel-Wenkenhof (Schweiz)',
  },
  {
    url: 'https://www.leo-clubs.de/',
    title: 'Leo Deutschland',
  },
  {
    url: 'https://leo-club-weilamrhein.de',
    title: 'Leo Club Weil am Rhein',
  },
];

const otherLinks = [
  {
    url:
      'http://www.lcif.org/GE/our-programs/sight/index.php?utm_source=RealMagnet&amp;utm_medium=email&amp;utm_campaign=6306%20LCIF%20Chairperson%20August%202013%20-%20GE',
    title: 'SightFirst',
  },
  { url: 'http://www.kisel.de', title: ' KISEL' },
  { url: 'http://www.klasse2000.de/', title: '  KLASSE 2000' },
  {
    url: 'http://www.pflegeheim-markgraeflerland.de/',
    title: 'Pflegeheim Markgräflerland in Weil am Rhein',
  },
  { url: 'http://www.dreilaendereck-tafel.de/', title: ' Dreiländereck-Tafel' },
  { url: 'http://fhf-loerrach.de/', title: ' Frauenhaus Lörrach' },
  { url: 'http://www.agj-erich-reisch-haus.de/', title: ' Erich-Reisch-Haus' },
  { url: 'http://www.hospizambulant.de/', title: '  Hospizgruppe Grenzach-Wyhlen' },
  { url: 'https://pro-digno.de/', title: ' Pro Digno eV' },
  {
    url:
      'http://www.badische-zeitung.de/weil-am-rhein/immer-fuer-ihre-schuetzlinge-da--73545448.html',
    title: 'Kids-Treff in Weil-Friedlingen',
  },
  { url: 'http://www.kihev.de/', title: '  Verein Kinderhilfe KIEV' },
  { url: 'http://tuellingerhoehe.de/', title: ' Tüllinger Höhe' },
  {
    url: 'https://www.sonnenwasser.info/',
    title: 'Projekt Sonnenwasser',
  },
  {
    url: 'https://www.omaweil.de',
    title: '  O.M.A. (Organisation für Mütter in der Arbeitswelt)',
  },
];

const Page = () => (
  <>
    <Head>
      <title>Links</title>
    </Head>
    <Card Tag="main">
      <Breadcrumbs
        entries={[
          { href: '/', title: 'Startseite' },
          { href: '/ueber-uns/', title: 'Über Uns' },
          { href: '/ueber-uns/links/', title: 'Links zu anderen Seiten' },
        ]}
      />

      <Title>Links</Title>
      <p>
        Wir pflegen eine Zusammenarbeit mit mehreren regionalen Lions Clubs sowie dem Leo Club Weil
        am Rhein. Hier finden Sie eine kleine Auswahl an Verknüpfungen zu diesen und anderen
        Vereinen sowie Projekte und Adressen, die uns am Herzen liegen.
      </p>
    </Card>

    <Card>
      <Title Tag="h2" underline>
        Lions & Leo Clubs
      </Title>

      <ul className={styles.list}>
        {lionsLinks.map((link) => (
          <li key={link.url}>
            <Link href={link.url}>
              <a className={styles.link} target="_blank" rel="noopener nofollow">
                {link.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Card>

    <Card>
      <Title Tag="h2" underline>
        Sonstige
      </Title>

      <ul className={styles.list}>
        {otherLinks.map((link) => (
          <li key={link.url}>
            <Link href={link.url}>
              <a className={styles.link} target="_blank" rel="noopener nofollow">
                {link.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  </>
);

export default Page;
