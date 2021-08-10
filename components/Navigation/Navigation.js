import { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import classes from './Navigation.module.scss';

const Navigation = (props) => {
  // const [user, setUser] = useState(props.data);
  useEffect(() => {
    console.log('navProps', props.userStatus);
  });
  //   useEffect(() => {
  //     const checkAuthUser = async () => {
  //       const response = await fetch('http://localhost:3000/api/auth/user', {
  //         method: 'GET',
  //         credentials: 'include',
  //         mode: 'cors',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       });
  //       // const result = await response.json()
  //       if (response.status === 401) {
  //         console.log('error');
  //       }
  //       console.log(response);
  //       const result = await response.json();
  //       console.log('main::', result);
  //       setUser(result);
  //     };
  //     checkAuthUser();
  //   }, []);
  const linkToProfileOrAuth = () => {
    let display;
    if (!props.userStatus) {
      return (display = (
        <Link href="/login">
          <a>
            <li>Login</li>
          </a>
        </Link>
      ));
    } else {
      return (display = (
        <Link href="/profile">
          <a>
            <li>{props.userStatus}</li>
          </a>
        </Link>
      ));
    }
  };
  return (
    <Fragment>
      <nav className={`${classes.nav_containter} ${classes.padded}`}>
        <ul className={classes.nav_brand}>
          <Link href="/">
            <a>
              <li>Beer Brand</li>
            </a>
          </Link>
        </ul>
        <ul className={classes.nav_menu}>
          <Link href="/cart">
            <a>
              <li>
                <Image
                  className={classes.cart}
                  src="/icons/cart.png"
                  alt="cart"
                  width={25}
                  height={25}
                />
              </li>
            </a>
          </Link>
          {linkToProfileOrAuth()}
        </ul>
      </nav>
      <section>{props.children}</section>
    </Fragment>
  );
};
export default Navigation;
