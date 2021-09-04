import { useEffect, useRef, useState } from 'react';
import classes from '../../components/styles/signin.module.scss';

const Register = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const fullnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    const fullName = localStorage.getItem('fullName');
    const expiresIn = localStorage.getItem('expiresIn');
    if (!fullName || !expiresIn) {
      return;
    } else {
      window.location.replace('/');
    }
  }, []);

  const setRedirectionTimer = () => {
    setTimeout(() => {
      window.location.replace('/login');
    }, 2000);
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    if (
      !fullnameRef.current.value ||
      !emailRef.current.value ||
      !passwordRef.current.value
    ) {
      setErrorMessage('Invalid input field values');
    } else {
      const registerUser = await fetch(
        'http://localhost:3000/api/login/vendor',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          credentials: 'include',
          mode: 'cors',
          body: JSON.stringify({
            fullname: fullnameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
          }),
        }
      );
      console.log('registerUser:::', registerUser);
      let result = await registerUser.json();
      if (!registerUser.ok) {
        setErrorMessage(result.message);
      } else {
        setSuccessMessage(result.message);
        setRedirectionTimer();
      }
    }
  };

  return (
    <div className={classes.Container}>
      <h2>Register</h2>
      <h4>{errorMessage ? errorMessage : ''}</h4>
      <form onSubmit={registerHandler}>
        <div>
          <label>
            Fullname:
            <input type="text" placeholder="Enter Fullname" ref={fullnameRef} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              placeholder="Enter email address"
              ref={emailRef}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              placeholder="Enter password"
              ref={passwordRef}
            />
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
      <p>{successMessage ? successMessage : ''}</p>
    </div>
  );
};
export default Register;
