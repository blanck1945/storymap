import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
// Layout
import Layout from "../components/Layout/Layout";
import theme from "../styles/theme";
// Provider
import LoginProvider from "../context/LoginContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <LoginProvider>
        <Layout>
          <CssBaseline />
          <Component {...pageProps} />
        </Layout>
      </LoginProvider>
    </ThemeProvider>
  );
}
export default MyApp;
