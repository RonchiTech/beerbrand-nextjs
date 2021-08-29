const Vendor = () => {
  return (
    <form>
      <div>
        <label>
          Email:
          <input type="email" placeholder="Enter email address" />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" placeholder="Enter password" />
        </label>
      </div>
      <button type="submit">Log in</button>
    </form>
  );
};
export default Vendor;
