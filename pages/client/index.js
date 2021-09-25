import Image from 'next/image';
import Cards from '../../components/Cards/Card';
const Client = () => {
  return (
    <div>
      <div className="landing-page">
        <div className="header">
          <h4 className="font-small">taste the</h4>
          <h1 className="font-large">Quality</h1>
          <a className="button shop-now__btn" href="/shop">
            SHOP NOW
          </a>
        </div>
        <p className="copyright">
          Copyright {'\u00A9'} 2021 Ronchi BeerBrand Inc.
        </p>
      </div>
      <div>
        <div className="ice">
          <div className="beers">
            <div className="beer_bottle">
              <Image
                src="/images/beer10.png"
                alt="splash"
                width={150}
                height={520}
              />
            </div>
            <div className="beer_canned">
              <Image
                src="/images/beer12.png"
                alt="splash"
                width={200}
                height={300}
              />
            </div>
          </div>
          <div className="splash">
            <Image
              className="splash__image"
              src="/images/splash.png"
              alt="splash"
              width={600}
              height={800}
            />
          </div>
          <div className="ice__left">
            <Image src="/images/ice.png" alt="ice" width={400} height={150} />
          </div>
          <div className="ice__right">
            <Image src="/images/ice.png" alt="ice" width={400} height={150} />
          </div>
        </div>
        {/* <Cards src="/images/beer.png" name="Beer" price="100" />
        <Cards src="/images/beer.png" name="Beer" price="100" />
        <Cards src="/images/beer.png" name="Beer" price="100" />
        <Cards src="/images/beer.png" name="Beer" price="100" /> */}
      </div>
    </div>
  );
};
export default Client;
