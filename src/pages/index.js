import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import 'semantic-ui-css/semantic.min.css'
import homePageTable from '@site/static/img/table.jpeg';


import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{backgroundColor: "teal"}}>
      <div className="container">
          <img src={homePageTable} />
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="math stuff">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
