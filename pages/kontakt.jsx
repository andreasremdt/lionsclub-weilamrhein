import { useState } from 'react';
import Head from 'next/head';
import Card from '../components/card';
import Button from '../components/button';
import Breadcrumbs from '../components/breadcrumbs';
import Input from '../components/input';
import Title from '../components/title';
import Container from '../components/container';
import styles from './kontakt.module.css';

const Page = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    // submit the email...
    console.log(formData.get('firstname'));

    setIsSent(true);
  };

  return (
    <>
      <Head>
        <title>Kontakt</title>
      </Head>
      <Container>
        <Card Tag="main" className={styles.wrapper}>
          <Breadcrumbs
            entries={[
              { href: '/', title: 'Startseite' },
              { href: '/kontakt/', title: 'Kontakt' },
            ]}
          />

          <Title>Schreiben Sie Uns</Title>
          <p>
            Haben Sie Fragen, Ideen, Vorschläge oder möchten einfach mit uns in Kontakt treten?
            Nutzen Sie dazu gerne das Formular auf dieser Seite oder schreiben Sie uns direkt an{' '}
            <a href="mailto:info@lc-weil.de">info@lc-weil.de</a>.
          </p>
          <p>
            Wir werden Ihre Nachricht schnellst möglich bearbeiten und antworten, bitte haben Sie
            Verständnis falls dies etwas länger dauert. Wir freuen uns auf Ihre Nachricht!
          </p>

          {isSent && (
            <div role="alert" className={styles.confirmation}>
              <img src="/email-sent.svg" width="300" />
              <Title Tag="h3">Vielen Dank!</Title>
              <p className={styles['confirmation-text']}>Ihre Nachricht wurde versendet.</p>
            </div>
          )}

          <form
            className={[styles.form, isSent ? styles.submitted : null].join(' ')}
            onSubmit={handleSubmit}
            noValidate
          >
            <Input
              id="firstname"
              label="Vorname"
              required
              placeholder=" "
              error="Bitte geben Sie Ihren Vornamen ein."
            />
            <Input
              id="lastname"
              label="Nachname"
              required
              placeholder=" "
              error="Bitte geben Sie Ihren Nachnamen ein."
            />
            <Input
              id="email"
              type="email"
              label="E-Mail"
              required
              placeholder=" "
              error="Bitte geben Sie eine gültige E-Mail ein."
            />
            <Input id="phone" label="Telefon" />
            <Input
              id="website"
              type="url"
              label="Webseite"
              placeholder=" "
              error="Bitte geben Sie eine gültige URL ein."
            />
            <Input
              Tag="textarea"
              id="message"
              label="Nachricht"
              minLength="10"
              required
              placeholder="Mindestens 10 Zeichen..."
              error="Bitte geben Sie mindestens 10 Buchstaben ein."
              rows="6"
            />
            <Button type="submit">Nachricht senden</Button>
          </form>
        </Card>
      </Container>
    </>
  );
};

export default Page;
