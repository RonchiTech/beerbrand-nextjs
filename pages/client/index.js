import Cards from '../../components/Cards/Card';
const Client = () => {
  return (
    <div className="landing-page">
      <div className="header">
        <h4 className="font-small">taste the</h4>
        <h1 className="font-large">Quality</h1>
        <a className="button" href="#">
          SHOP NOW
        </a>
      </div>
      <div className="card-container">
        <Cards src="/images/beer.png" name="Beer" price="100" />
        <Cards src="/images/beer.png" name="Beer" price="100" />
        <Cards src="/images/beer.png" name="Beer" price="100" />
        <Cards src="/images/beer.png" name="Beer" price="100" />
      </div>
    </div>
  );
};
export default Client;
