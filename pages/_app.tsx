

import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react';

function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}
   // basePath="login"
      // Re-fetch session every 5 minutes
      // refetchInterval={1 * 60}
      // // Re-fetches session when window is focused
      // refetchOnWindowFocus={false}
    >
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default App;
