import "../styles/globals.css";

import Layout from "../components/layout/Layout";

// npm run dev

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
