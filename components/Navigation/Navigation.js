import { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import classes from './Navigation.module.scss';

const navItems = [{ id: 'login', text: 'LOGIN', link: '/login', auth: false }];

const Navigation = (props) => {
  // const [user, setUser] = useState(props.data);
  // useEffect(() => {
  //   // console.log('navProps', props);
  // });
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
  const navList = [
    ...navItems
      .filter((item) => item.auth === props.isAuth)
      .map((item) => (
        <Link href={item.link} key={item.id}>
          <a className="button">
            <li>{item.text}</li>
          </a>
        </Link>
      )),
  ];
  // console.log('navList', navList);
  // const linkToProfileOrAuth = () => {
  //   let display;
  //   if (!props.userStatus) {
  //     return (display = (
  //       <Link href="/login">
  //         <a>
  //           <li>Login</li>
  //         </a>
  //       </Link>
  //     ));
  //   } else {
  //     return (display = (
  //       <Link href="/profile">
  //         <a>
  //           <li>{props.userStatus}</li>
  //         </a>
  //       </Link>
  //     ));
  //   }
  // };
  return (
    <Fragment>
      <nav className={`${classes.nav_containter} ${classes.padded}`}>
        <Link href="/">
          <a className={classes.nav_brand}>
            <Image
              src="/images/beerbrandlogo.svg"
              alt="beer-brand-logo"
              width={65}
              height={65}
            />
          </a>
        </Link>

        <ul className={classes.nav_menu}>
          <Link href="/cart">
            <a className={classes.cart}>
              <li>
                <Image
                  className={classes.cart}
                  src="/icons/cart-black.svg"
                  alt="cart"
                  width={25}
                  height={25}
                />
              </li>
            </a>
          </Link>
          {navList}
          {props.isAuth && (
            <Link href="/profile">
              <a>
                <li>{props.userStatus}</li>
              </a>
            </Link>
          )}
        </ul>
      </nav>
      <section>{props.children}</section>
    </Fragment>
  );
};
export default Navigation;
