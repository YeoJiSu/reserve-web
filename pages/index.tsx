import Layout from "components/Layout";
import React from "react";
// import Vercel from '../public/vercel.svg';
import BodyContainer from "../pages/BodyComponent/Body.Container";
const IndexPage = (): JSX.Element => {
  return (
    <Layout>
      <BodyContainer/>
      <main className={"styles.main"}>
        <h1 className={"styles.title"}>
          
        </h1>
        <p className={"styles.description"}>
          {/*<code className={"styles.code"}></code>*/}
        </p>
      </main>
    </Layout>
  );
};

export default IndexPage;
