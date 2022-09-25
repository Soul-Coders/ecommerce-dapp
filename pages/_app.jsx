import '../styles/globals.css';
import { ConnectionProvider } from '../context/ConnectionContext';

function MyApp({ Component, pageProps }) {
  return (
    <ConnectionProvider>
      <Component {...pageProps} />
    </ConnectionProvider>
  );
}

export default MyApp;
