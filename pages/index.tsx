import Layout from "components/Layout";
import React from "react";
// import Vercel from '../public/vercel.svg';

const IndexPage = (): JSX.Element => {
  return (
    <Layout>
      <img className="phoneImage" width="100%" alt="iPhone_01" src="bg1.jpg" />
      <main className={"styles.main"}>
        <h1 className={"styles.title"}>승마장 예약을 한눈에 ! </h1>
        <p className={"styles.description"}>
          <code className={"styles.code"}>pages/index.js</code>
        </p>
      </main>
    </Layout>
  );
};

export default IndexPage;
