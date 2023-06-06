import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import useFetch from "../../Hooks/useFetch";
import HelmetTitle from "../Helmet/Helmet";

const ItemListContainer = ({ title }) => {
  const { categoryId } = useParams();
  const { isLoading, products } = useFetch(categoryId);

  if (isLoading) {
    return (
      <>
        <HelmetTitle title={"iHardware"} />
        <span className="loader"></span>;
      </>
    );
  }

  return (
    <section>
      <h1 className="item-list-container__title">{title}</h1>
      <ItemList products={products} />
    </section>
  );
};

export default ItemListContainer;
