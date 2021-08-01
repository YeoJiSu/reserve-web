import Layout from "components/Layout";
import React from "react";
// import Vercel from '../public/vercel.svg';

const IndexPage = (): JSX.Element => {
  return (
    <Layout>
      <main className={"styles.main"}>
        <h1 className={"styles.title"}>
          승마장을 예약을 한눈에 !<br />
        </h1>
        <p className={"styles.description"}>
          <code className={"styles.code"}>pages/index.js</code>
        </p>
      </main>
    </Layout>
  );
};

export default IndexPage;
