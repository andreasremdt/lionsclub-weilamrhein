import Link from 'next/link';

import Container from './container';
import Logo from './logo';

const MENU_ITEMS = [
  {
    href: '/kontakt/',
    name: 'Kontakt',
  },
  {
    href: '/datenschutz/',
    name: 'Datenschutz',
  },
  {
    href: '/impressum/',
    name: 'Impressum',
  },
  {
    href: '/sitemap/',
    name: 'Sitemap',
  },
];

const Footer = () => (
  <footer className="bg-blue-dark text-white py-12 text-center mt-24">
    <Container>
      <Logo variant="light" size="small" className="mx-auto mb-6" />

      <nav className="mb-2">
        {MENU_ITEMS.map((menuItem) => (
          <Link href={menuItem.href} key={menuItem.href}>
            <a className="font-light mx-4">{menuItem.name}</a>
          </Link>
        ))}
      </nav>

      <p>&copy; {new Date().getFullYear()} Lions Club Weil am Rhein. Alle Rechte vorbehalten.</p>
    </Container>
  </footer>
);

export default Footer;
