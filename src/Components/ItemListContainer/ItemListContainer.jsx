import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import useFetch from "../../Hooks/useFetch";
import HelmetTitle from "../Helmet/Helmet";

const capitalizeSecondLetter = (str) => {
  const capitalize = (index) =>
    str[0].toUpperCase() +
    str.slice(1, index) +
    str[index].toUpperCase() +
    str.slice(index + 1);

  switch (str) {
    case "iphones":
    case "ipads":
      return capitalize(1);

    case "macbooks":
      return capitalize(3);

    default:
      return str;
  }
};

const Loader = () => (
  <>
    <HelmetTitle title="iHardware" />
    <span className="loader"></span>
  </>
);

const Content = ({ categoryId, products }) => {
  const title = capitalizeSecondLetter(categoryId || "iHardware");
  const subtitle = !categoryId && "All our products";

  return (
    <>
      <HelmetTitle title={title} />
      <section>
        <h1 className="container-title">{title}</h1>
        {subtitle && <h2 className="item-list__title">{subtitle}</h2>}
        <ItemList products={products} />
      </section>
    </>
  );
};

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const { isLoading, products } = useFetch(categoryId);

  return isLoading ? (
    <Loader />
  ) : (
    <Content categoryId={categoryId} products={products} />
  );
};

export default ItemListContainer;
