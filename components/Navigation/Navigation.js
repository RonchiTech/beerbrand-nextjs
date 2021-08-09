import { Fragment } from 'react';
import classes from './Navigation.module.scss'
import Link from 'next/link'
const Navigation = (props) => {
  return (
    <Fragment>
      <nav className={classes.nav_containter}>
        <ul className={classes.nav_brand}>
          <Link href="/">
            <a>
              <li>Beer Brand</li>
            </a>
          </Link>
        </ul>
        <ul className={classes.nav_menu}>
          {/* <li>cart</li> */}
          <Link href="/account">
            <a>
              <li>{props.data ? props.data : 'login'}</li>
            </a>
          </Link>
        </ul>
      </nav>
      <section>{props.children}</section>
    </Fragment>
  );
};
export default Navigation;
