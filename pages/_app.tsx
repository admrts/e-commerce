import type { AppProps } from "next/app";
import "../styles/index.css";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import { ThemeProvider } from "@mui/material";
import theme from "../styles/Style";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
