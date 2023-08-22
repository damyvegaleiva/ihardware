import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import useFetch from "../../Hooks/useFetch";
import HelmetTitle from "../Helmet/Helmet";

const ItemListContainer = () => {
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
    <>
      <HelmetTitle title={"iHardware"} />

      <section>
        <h1 className="container-title">{categoryId || "iHardware"}</h1>

        <h2 className="item-list__title">
          {!categoryId && "All our products"}
        </h2>
        <ItemList products={products} />
      </section>
    </>
  );
};

export default ItemListContainer;
