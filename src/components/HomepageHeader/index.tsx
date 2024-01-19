import clsx from 'clsx';

import styles from './styles.module.css';

type Props = {
  title: string;
  subtitle: string;
};

export default function HomepageHeader({title, subtitle}: Props): JSX.Element {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
      </div>
    </header>
  );
}
