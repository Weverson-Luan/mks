/**
 * IMPORTS
 */
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/global";
import { Provider } from "react-redux";
import store from "../redux/store";
import { Container } from "@/Container/style";
import { Header } from "@/components/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;

export default MyApp;
