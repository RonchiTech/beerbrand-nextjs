import Head from 'next/head';
import { useEffect, useState } from 'react';

import Navigation from '../components/Navigation/Navigation';

import '../styles/globals.css';
import '../styles/styles.scss';
function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({
    fullName: null,
    email: null,
    imageUrl: null,
  });
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    console.log('pageProps', pageProps);
    const fullName = localStorage.getItem('fullName');
    const expiresIn = localStorage.getItem('expiresIn');
    if (!fullName || !expiresIn) {
      return;
    }
    const email = localStorage.getItem('email');
    const imageUrl = localStorage.getItem('imageUrl');
    const remainingTime = new Date(expiresIn).getTime();
    console.log(remainingTime);
    setIsAuth(true);
    setUser({ fullName, email, imageUrl });
    setAutoLogout(remainingTime);
  }, []);

  const setAutoLogout = (remainingTime) => {
    const dateToday = new Date().getTime();
    if (dateToday > remainingTime) {
      logoutHandler();
    }
  };

  const logoutHandler = () => {
    setIsAuth(false);
    setUser({ fullName: null, email: null, imageUrl: null });
    localStorage.removeItem('email');
    localStorage.removeItem('fullName');
    localStorage.removeItem('expiresIn');
    localStorage.removeItem('imageUrl');
  };
  return (
    <Navigation userStatus={user.fullName} isAuth={isAuth}>
      <Head>
        <title>Beer Brand</title>
      </Head>
      <Component {...pageProps} />
    </Navigation>
  );
}

export default MyApp;
