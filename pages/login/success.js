import { useEffect } from 'react';

const LoginSuccess = () => {
  useEffect(() => {
    setTimeout(() => {
      fetchAuthUser();
    }, 1000);

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
      // const remainingTime = new Date(result.expiresIn).getTime();
      // setIsAuth(true);
      // setAutoLogout(remainingTime);
      window.location.replace('/');
      // console.log('authCheck result', result);

      // dispatch(authSuccess(result));
      // setUser({ email: result.email });
    } catch (err) {
      console.log('authCheck error:', err);
    }
  };
  return <div>
    <h2>Thanks for logging in</h2>
    <p>You will be redirected shortly....</p>
    </div>;
};
export default LoginSuccess;
