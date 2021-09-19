import Image from 'next/image';
const Cards = (props) => {
  return (
    <div className="card">
      <Image src={props.src} alt={props.alt} width={100} height={200} />
      <h4>{props.name}</h4>
      <p>P{props.price}</p>
      <div className="button card__button">
        <a href="#">ADD TO CART</a>
      </div>
    </div>
  );
};
export default Cards;
