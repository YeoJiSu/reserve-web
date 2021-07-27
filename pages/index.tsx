import { HomeBlock } from 'asd';
import Layout from 'components/Layout';
import React from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const a = 1;
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>
    </Layout>
  );
}
