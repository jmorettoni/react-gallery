import { GlobalStyle } from '../styles/global'

import '../styles/custom.css';


/////IMPLEMENTANDO ROTAS//////
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Home } from '../components/Home';
/////IMPLEMENTANDO ROTAS//////


function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
