import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Services/Firebase/firebaseConfig";

const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();


  useEffect(() => {
    if (categoryId) {
      document.title = `iHardware / ${categoryId}`
    } else (
      document.title = "Welcome to iHardware"
    )
  }, [categoryId])

  useEffect(() => {
    setIsLoading(true)

    const collectionRef = categoryId
      ? query(collection(db, 'products'), where('category', '==', categoryId))
      : collection(db, 'products')

    getDocs(collectionRef).then(response => {
      const productsAdapted = response.docs.map(doc => {
        const data = doc.data();
        return { id: doc.id, ...data }
      })

      setProducts(productsAdapted);
    }).catch(error => {
      console.log(error)
    }).finally(() => {
      setIsLoading(false)
    })

  }, [categoryId]);



  if (isLoading) {
    return <span className="loader"></span>
  }


  return (
    <section>
      <h1 className="item-list-container__title">{title}</h1>
      <ItemList products={products} />
    </section>
  );
}

export default ItemListContainer;