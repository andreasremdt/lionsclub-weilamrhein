import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './breadcrumbs.module.css';

const Breadcrumbs = ({ entries }) => (
  <nav className={styles.wrapper}>
    {entries.map((entry, index) => {
      if (index < entries.length - 1) {
        return (
          <Link key={entry.href} href={entry.href}>
            <a className={styles.entry}>{entry.title}</a>
          </Link>
        );
      }

      return <span key={entry.href}>{entry.title}</span>;
    })}
  </nav>
);

Breadcrumbs.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default Breadcrumbs;
