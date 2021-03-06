import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import GoogleBtn from 'react-google-button';

import VendorLogin from '../../components/Login/Vendor';

import classes from '../../components/styles/signin.module.scss';

const Login = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isVendor, setIsVendor] = useState(false);
  const router = useRouter();
  const googleLoginUrl = 'http://localhost:3000/api/login/google';

  useEffect(() => {
    const fullName = localStorage.getItem('fullName');
    const expiresIn = localStorage.getItem('expiresIn');
    if (!fullName || !expiresIn) {
      return;
    } else {
      window.location.replace('/');
    }
  }, []);
  const fetchAuthUser = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/user', {
        method: 'GET',
        credentials: 'include',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('authCheck response', response);
      if (!response.ok) {
        logoutHandler();
        console.log(response.statusText);
        throw response.statusText;
      }
      const result = await response.json();
      console.log('loginresult', result);
      localStorage.setItem('email', result.user.email);
      localStorage.setItem('fullName', result.user.fullName);
      localStorage.setItem('imageUrl', result.user.picture);
      localStorage.setItem('expiresIn', result.expiresIn);
      // console.log(typeof result.expiresIn);
      // console.log(typeof new Date().toISOString());
      const remainingTime = new Date(result.expiresIn).getTime();
      setIsAuth(true);
      setAutoLogout(remainingTime);
      window.location.replace('/');
      // console.log('authCheck result', result);

      // dispatch(authSuccess(result));
      // setUser({ email: result.email });
    } catch (err) {
      console.log('authCheck error:', err);
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
  const setAutoLogout = (remainingTime) => {
    const dateToday = new Date().getTime();
    if (dateToday > remainingTime) {
      logoutHandler();
    }
  };

  const signInWithGoogle = async () => {
    let timer;
    const y = window.top.outerHeight / 2 + window.top.screenY - 600 / 2;
    const x = window.top.outerWidth / 2 + window.top.screenX - 400 / 2;
    const googleLoginUrl = 'http://localhost:3000/api/login/google';
    const newWindow = window.open(
      googleLoginUrl,
      'signin',
      `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${400}, height=${600}, top=${y}, left=${x}`
    );
    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          console.log('You will be authenticated!');
          fetchAuthUser();
          if (timer) clearInterval(timer);
        }
      }, 500);
    }
  };
  let LoginDisplay = (
    <a href={googleLoginUrl}>
      <GoogleBtn className={classes.GoogleBtn} />
    </a>
  );
  if (isVendor) {
    LoginDisplay = <VendorLogin />;
  }
  return (
    <div className={classes.LoginContainer}>
      <div className={classes.ImageContainer}>
        <Image
          src="/images/kingdom-1663.png"
          alt="shopping-image"
          width={400}
          height={400}
        />
      </div>
      <div className={classes.FormContainer}>
        <h2 className={classes.Welcome_Message}>WELCOME TO</h2>
        <h3 className={classes.Brand_Message}>
          Beer <span>Brand</span>
        </h3>
        {LoginDisplay}
        <p className={classes.Change_Login}>
          Are you a {isVendor ? 'drinker' : 'vendor'}?{' '}
          <span
            className={classes.Link}
            onClick={() => {
              setIsVendor((prevValue) => !prevValue);
            }}
          >
            Click here
          </span>
        </p>
        <Link href="/register" passHref={true}>
          <p className={`${classes.Change_Login} ${classes.Link}`}>
            Click here to signup as a vendor
          </p>
        </Link>
      </div>
    </div>
  );
};
export default Login;
