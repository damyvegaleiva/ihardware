import { Link } from "react-router-dom";

const AfterAddToCartOptions = () => {
    return (
        <>
            <button><Link to={'/cart'}>Go to checkout</Link></button>
            <button><Link to={'/'}>Continue shopping</Link></button>
        </>
    );
}

export default AfterAddToCartOptions;