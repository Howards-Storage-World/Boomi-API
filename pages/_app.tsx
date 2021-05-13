import { AppProps } from 'next/app'
import { BoomiAPIProvider } from "@components/tools/BoomiAPI";

import '@styles/global.css'
import '@styles/prism-okaidia.css';
// import '@styles/prism-tomorrow.css';


export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <BoomiAPIProvider>
      <Component {...pageProps} />
    </BoomiAPIProvider>
  );
}
