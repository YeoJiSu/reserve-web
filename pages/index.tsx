import BodyContainer from "@/components/BodyComponent/Body.Container";
import React from "react";

// import Vercel from '../public/vercel.svg';
const IndexPage = (): JSX.Element => {
  return (
    <>
      <BodyContainer />
      <main className={"styles.main"}>
        <h1 className={"styles.title"}></h1>
        <p className={"styles.description"}></p>
      </main>
    </>
  );
};

export default IndexPage;
