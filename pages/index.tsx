import Layout from 'components/Layout';
import React from 'react';
// import Vercel from '../public/vercel.svg';

const IndexPage = (): JSX.Element => {
  return (
    <Layout>
      <main className={'styles.main'}>
        <p className={'styles.description'}>
          Get started by editing
          <code className={'styles.code'}>pages/index.js</code>
        </p>
      </main>
    </Layout>
  );
};

export default IndexPage;
