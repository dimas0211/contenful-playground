import "../styles/styles.scss";
import type { AppProps } from "next/app";
import BasicLayout from "../layouts/basic";

import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BasicLayout>
      <Component {...pageProps} />
    </BasicLayout>
  );
}

export default MyApp;
