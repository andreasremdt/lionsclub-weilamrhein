import Head from 'next/head';
import Link from 'next/link';
import Card from '../components/card';
import Breadcrumbs from '../components/breadcrumbs';
import Title from '../components/title';
import Container from '../components/container';
import styles from './impressum.module.css';

const Page = () => (
  <>
    <Head>
      <title>Impressum</title>
    </Head>
    <Container>
      <Card Tag="main">
        <Breadcrumbs
          entries={[
            { href: '/', title: 'Startseite' },
            { href: '/impressum/', title: 'Impressum' },
          ]}
        />
        <Title Tag="h2" underline>
          Vorstand & Anschrift
        </Title>

        <div className={styles.container}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <strong className={styles.title}>Präsident:</strong> Gerhard Laux
            </li>
            <li className={styles.item}>
              <strong className={styles.title}>Vize-Präsident:</strong> Peter Pietruck
            </li>
            <li className={styles.item}>
              <strong className={styles.title}>Schatzmeisterin:</strong> Bärbel Kolz
            </li>
            <li className={styles.item}>
              <strong className={styles.title}>Sekretär:</strong> Hartmut Kern
            </li>
          </ul>

          <ul className={styles.list}>
            <li className={styles.item}>
              <strong className={styles.title}>Postanschrift:</strong> Gerhard Laux
              <br />
              Efringerstr. 51
              <br />
              79576 Weil am Rhein
            </li>
            <li className={styles.item}>
              <strong className={styles.title}>Kontakt:</strong>
              <a href="mailto:info@lc-weil.de">info@lc-weil.de</a> oder per{' '}
              <Link href="/kontakt/">
                <a>Kontaktformular</a>
              </Link>
            </li>
          </ul>
        </div>
      </Card>

      <Card>
        <Title Tag="h2" underline>
          Haftungsausschluss
        </Title>
        <Title Tag="h5" className={styles.heading}>
          1. Haftungsbeschränkung
        </Title>
        <p>
          Die Webseite wurde mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite
          übernimmt dennoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der
          bereitgestellten Inhalte und Informationen. Die Nutzung der Webseiteninhalte erfolgt auf
          eigene Gefahr. Allein durch die Nutzung der Website kommt keinerlei Vertragsverhältnis
          zwischen dem Nutzer und dem Anbieter zustande.
        </p>
        <Title Tag="h5" className={styles.heading}>
          2. Verlinkungen
        </Title>
        <p>
          Die Webseite enthält Verlinkungen zu anderen Webseiten (“externe Links”). Diese Webseiten
          unterliegen der Haftung der jeweiligen Seitenbetreiber. Bei Verknüpfung der externen Links
          waren keine Rechtsverstöße ersichtlich. Auf die aktuelle und künftige Gestaltung der
          verlinkten Seiten hat der Anbieter keinen Einfluss. Die permanente Überprüfung der
          externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht
          zumutbar. Bei Bekanntwerden von Rechtsverstößen werden die betroffenen externen Links
          unverzüglich gelöscht.
        </p>
        <Title Tag="h5" className={styles.heading}>
          3. Urheberrecht / Leistungsschutzrecht
        </Title>
        <p>
          Die auf dieser Webseite durch den Anbieter veröffentlichten Inhalte unterliegen dem
          deutschen Urheberrecht und Leistungsschutzrecht. Alle vom deutschen Urheber- und
          Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen
          Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt vor allem für
          Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe
          von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Dabei sind
          Inhalte und Rechte Dritter als solche gekennzeichnet. Das unerlaubte Kopieren der
          Webseiteninhalte oder der kompeltten Webseite ist nicht gestattet und strafbar. Lediglich
          die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht
          kommerziellen Gebrauch ist erlaubt. Diese Website darf ohne schriftliche Erlaubnis nicht
          durch Dritte in Frames oder iFrames dargestellt werden.
        </p>
        <Title Tag="h5" className={styles.heading}>
          3. Datenschutz
        </Title>
        <p>
          Mit dem Besuch dieser Webseite können Informationen über den Zugriff gespeichert werden.
          Diese Daten wie Uhrzeit, Datum und die betrachtete Seite gehören nicht zu den
          personenbezogenen Daten, sondern sind anonymisiert. Dies werden nur aus statistischen
          Zwecken erfasst. Eine Weitergabe an Dritte, zu kommerziellen oder nichtkommerziellen
          Zwecken, erfolgt nicht. Der Anbieter weist ausdrücklich darauf hin, dass die
          Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken
          aufweisen und nicht lückenlos vor dem Zugriff durch Dritte geschützt werden kann. Die
          Verwendung der Kontaktdaten des Impressums zur gewerblichen Werbung ist ausdrücklich nicht
          erwünscht, es sei denn der Anbieter hatte zuvor seine schriftliche Einwilligung erteilt
          oder es besteht bereits eine Geschäftsbeziehung. Der Anbieter und alle auf dieser Website
          genannten Personen widersprechen hiermit jeder kommerziellen Verwendung und Weitergabe
          ihrer Daten.
        </p>
      </Card>
    </Container>
  </>
);

export default Page;
