import '../ui/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material';
import tema from '../ui/themes/temas';
import Cabecalho from '../ui/components/Header/Header';


function MyApp({ Component, pageProps }: AppProps) {
  return (<ThemeProvider theme={tema}>
    <Cabecalho />

    <Component {...pageProps} /> 

    </ThemeProvider>
    
  );
    
}

export default MyApp
