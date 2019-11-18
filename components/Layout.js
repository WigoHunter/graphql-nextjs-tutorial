// @flow
import * as React from "react";
import Head from "next/head";
import Nav from "./nav";

type Props = {|
  children: React.Node
|};

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
