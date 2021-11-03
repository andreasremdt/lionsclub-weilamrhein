import Link from 'next/link';
import PropTypes from 'prop-types';

const Breadcrumbs = ({ entries }) => (
  <nav className="uppercase text-sm tracking-wider mb-4">
    {entries.map((entry, index) => {
      if (index < entries.length - 1) {
        return (
          <Link key={entry.href} href={entry.href}>
            <a className="text-blue mr-8 relative breadcrumb">{entry.title}</a>
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
