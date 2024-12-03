import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import useFetch from "../../Hooks/useFetch";
import HelmetTitle from "../Helmet/Helmet";

const capitalizeSecondLetter = (str) => {
  const capitalizeMultiple = (...indices) => {
    let result = str;

    indices.forEach((index) => {
      result =
        result.slice(0, index) +
        result[index].toUpperCase() +
        result.slice(index + 1);
    });

    return result;
  };

  switch (str) {
    case "iphones":
    case "ipads":
      return capitalizeMultiple(1);
    case "macbooks":
      return capitalizeMultiple(0, 3);
    default:
      return str;
  }
};

const Loader = () => (
  <>
    <span className="loader"></span>
  </>
);

const Content = ({ categoryId, products }) => {
  const contentHeading =
    capitalizeSecondLetter(categoryId) ?? "All our products";

  return (
    <>
      <HelmetTitle
        title={
          categoryId
            ? `${capitalizeSecondLetter(categoryId)} · iHardware`
            : "Welcome to iHardware"
        }
      />
      <section>
        <h1 className="container-title">iHardware</h1>
        <h2 className="item-list__title">{contentHeading}</h2>

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
