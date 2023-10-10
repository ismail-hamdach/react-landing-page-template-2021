import { AppProps } from "next/app";

import "../styles/main.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>

    <Component {...pageProps} />
    <ToastContainer />
  </>
);

export default MyApp;
