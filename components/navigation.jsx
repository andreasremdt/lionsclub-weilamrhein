import Link from 'next/link';

import Button from './button';

const MENU_ITEMS = [
  {
    href: '/',
    name: 'Startseite',
    description: 'Lernen Sie uns kennen',
  },
  {
    href: '/aktionen/',
    name: 'Aktionen',
    description: 'Was wir machen',
  },
  {
    href: '/ueber-uns/',
    name: 'Über Uns',
    description: 'Details zum Club',
  },
  {
    href: '/kontakt/',
    name: 'Kontakt',
    description: 'Schreiben Sie uns',
  },
];

const Navigation = () => {
  return (
    <nav className="container mx-auto bg-logo bg-no-repeat bg-left">
      <ul className="ml-28 h-32 flex items-center">
        {MENU_ITEMS.map((menuItem) => (
          <li key={menuItem.href}>
            <Link href={menuItem.href}>
              <a className="flex flex-col mr-12">
                <span className="font-bold">{menuItem.name}</span>
                <span className="text-xs">{menuItem.description}</span>
              </a>
            </Link>
          </li>
        ))}

        <li className="ml-auto mr-2">
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
    </nav>
  );
};

export default Navigation;
