import classes from './Vendor.module.scss'
const Vendor = () => {
  return (
    <form className={classes.VendorForm}>
      <div>
        <label htmlFor="email" className={classes.form_label}>
          Email Address:
        </label>
        <input id="email" type="email" placeholder="Enter email address" />
      </div>
      <div>
        <label htmlFor="password" className={classes.form_label}>
          Password:
        </label>
        <input id="password" type="password" placeholder="Enter password" />
      </div>
      <button className="button" type="submit">Log in</button>
    </form>
  );
};
export default Vendor;
