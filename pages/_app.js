import Head from 'next/head';
import { useEffect, useState } from 'react';

import Navigation from '../components/Navigation/Navigation';

import '../styles/globals.css';
import '../styles/styles.scss';
function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({ fullName: null });
  // const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const checkAuthUser = async () => {
      console.log(user);
      try {
        const response = await fetch('http://localhost:3000/api/auth/user', {
          method: 'GET',
          credentials: 'include',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        // const result = await response.json()
        console.log(response);
        if (response.status === 401) {
          setUser({ fullName: null });
          setIsLoading(false);
        }
        const result = await response.json();
        console.log('main::', result);
        setUser({ fullName: result.fullName });
        setIsLoading(false);
      } catch (err) {
        console.log('Error::', err);
      }
    };
    checkAuthUser();
  }, []);

  return (
    <Navigation userStatus={user.fullName}>
      <Head>
        <title>Beer Brand</title>
      </Head>
      <Component {...pageProps} />
    </Navigation>
  );
}

export default MyApp;
