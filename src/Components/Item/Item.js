import { Link } from "react-router-dom";

const Item = ({ name, price, img, id }) => {
    return (
        <article className="item-list-container__item">
            <h2>{name}</h2>
            <img src={img} alt={name} width={350} />
            <h3>Precio: ${price}</h3>
            <button><Link to={`/detail/${id}`}>See More</Link></button>
        </article>
    );
}

export default Item;
