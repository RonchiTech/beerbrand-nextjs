import { useEffect, useState } from 'react';
import GoogleBtn from 'react-google-button';
import { useRouter } from 'next/router';
import classes from '../../components/styles/signin.module.scss';
const Login = () => {
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // if (isAuth) {
    //   window.location.replace('/');
    // }
    const checkAuthUser = async () => {
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
        if (response.status !== 401) {
          router.push('/');
        }
      } catch (err) {
        console.log('Error::', err);
      }
    };
    checkAuthUser();
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
      // console.log('authCheck result', result);

      // dispatch(authSuccess(result));
      // setUser({ email: result.email });
    } catch (err) {
      console.log('authCheck error:', err);
    }
  };
  const logoutHandler = () => {
    setIsAuth(false);

  }
  const setAutoLogout = (remainingTime) => {
    setTimeout(() => {
      logoutHandler();
    }, remainingTime);
  }

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
  return (
    <div className={classes.Signin_Container}>
      <GoogleBtn className={classes.GoogleBtn} onClick={signInWithGoogle} />
    </div>
  );
};
export default Login;
