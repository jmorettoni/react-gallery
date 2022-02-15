import { GlobalStyle } from '../styles/global'

import '../styles/custom.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
