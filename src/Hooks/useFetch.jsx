import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Services/Firebase/firebaseConfig";

const useFetch = (categoryId) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(categoryId);

  useEffect(() => {
    setIsLoading(true);

    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });

        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [categoryId]);

  return { products, setProducts, isLoading };
};

export default useFetch;
