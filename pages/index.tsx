import Layout from 'components/Layout';
import React from 'react';

import Varcel from '../public/vercel.svg';

const IndexPage = (): JSX.Element => {
  return (
    <Layout>
      <img src={Varcel} />
    </Layout>
  );
};

export default IndexPage;
