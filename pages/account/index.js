import { useState, useEffect } from 'react';
import Link from 'next/link';
import GoogleBtn from 'react-google-button';
import classes from '../../components/styles/signin.module.scss';
const User = ({ data }) => {
const [user, setUser] = useState({ fullName: null });
useState(() => {
  const checkAuthUser = async () => {
    console.log(user);
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
    }
    const result = await response.json();
    console.log('main::', result);
    setUser({ fullName: result.fullName });
  };
  checkAuthUser();
}, []);

  
  const display = user.fullName ? (
    user.fullName
  ) : (
    <div className={classes.Signin_Container}>
      <GoogleBtn className={classes.GoogleBtn} onClick={signInWithGoogle} />
    </div>
  );
  return <div>{display}</div>;
};

// export async function getServerSideProps(context) {
//   console.log(context.req.cookies);
//   const response = await fetch('http://localhost:3000/api/auth/user', {
//     method: 'GET',
//     credentials: 'include',
//     mode: 'cors',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   // const result = await response.json()
//   console.log('the response', response);
//   if (response.status === 401) {
//     return {
//       props: { data: null },
//     };
//   }
//   console.log(response);
//   const result = await response.json();
//   console.log('acc::', result);
//   return {
//     props: {
//       data: result,
//     },
//   };
// }
export default User;
