import { useEffect } from "react";
import App from "next/app";
import { ThemeProvider } from "styled-components";

import { withApollo } from "@/utils/apollo";
import { GlobalStateProvider } from "@/components/GlobalState";
import { theme } from "@/utils/theme";
import GlobalStyle from "@/components/GlobalStyle";
import Header from "@/components/Header";
import * as analytics from "@/utils/analytics";
import AuthProvider from "@/components/Auth/AuthProvider";
import Layout from "@/components/Layout";
import "swiper/swiper-bundle.min.css";
import "@/utils/swiper.css";
import "@/utils/video.css";

function MyApp({ Component, pageProps }) {
  // Site credits
  useEffect(
    () =>
      console.log(
        "%c Website designed and developed by La Colonia studio. https://lacolonia.studio ",
        "background: #000; color: #bada55; width: 100%;"
      ),
    []
  );

  return (
    <GlobalStateProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AuthProvider>
          {/* <Header /> */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </ThemeProvider>
    </GlobalStateProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
MyApp.getInitialProps = async appContext => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default withApollo({ ssr: true })(MyApp);
