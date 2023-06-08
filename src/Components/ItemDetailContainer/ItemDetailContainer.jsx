import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Services/Firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      const docRef = doc(db, "products", itemId);

      getDoc(docRef)
        .then((doc) => {
          const dataProduct = doc.data();
          const productAdapted = { id: doc.id, ...dataProduct };
          setProduct(productAdapted);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, [500]);
  }, [itemId]);

  if (isLoading) {
    return <span className="loader"></span>;
  }

  return (
    <>
      <ItemDetail {...product} />
    </>
  );
};

export default ItemDetailContainer;
