import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import HomepageHeader from '../components/HomepageHeader';
import HomepageFeatures from '../components/HomepageFeatures';
import Comments from '../components/Comments';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <HomepageHeader title={siteConfig.title} subtitle={siteConfig.tagline} />
      <main>
        <HomepageFeatures />
        <Comments className="container" />
      </main>
    </Layout>
  );
}
