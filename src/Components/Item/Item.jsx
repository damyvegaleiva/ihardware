import { useNavigate } from "react-router-dom";

const Item = ({ name, price, img, id }) => {
  const navigate = useNavigate();

  return (
    <article className="item-list-container__item">
      <h2>{name}</h2>
      <img src={img} alt={name} width={350} />
      <h3>Price: ${price}</h3>
      <button onClick={() => navigate(`/detail/${id}`)}>See More</button>
    </article>
  );
};

export default Item;
