import { HomeBlock } from 'asd';
import Layout from 'components/Layout';
import React from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>``</h1>
        <p className={styles.description}>
          Get started by editing
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>
    </Layout>
  );
}
