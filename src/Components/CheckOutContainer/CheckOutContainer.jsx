import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { db } from "../../Services/Firebase/firebaseConfig";
import {
  collection,
  query,
  where,
  documentId,
  getDocs,
  writeBatch,
  addDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import CheckOutList from "../CheckOutList/CheckOutList";

const CheckOutContainer = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const navigate = useNavigate();

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async (buyerInfo) => {
    const { firstName, lastName, email } = buyerInfo;
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name: firstName,
          phone: lastName,
          email: email,
        },
        items: cart,
        total,
      };

      const batch = writeBatch(db);

      const ids = cart.map((prod) => prod.id);
      const productsRef = query(
        collection(db, "products"),
        where(documentId(), "in", ids)
      );

      const productsAddedToCartFromFirestore = await getDocs(productsRef);
      const { docs } = productsAddedToCartFromFirestore;

      const outOfStock = [];

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => doc.id === prod.id);
        const prodQuantity = productAddedToCart.qty;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);
        const { id } = orderAdded;

        setOrderId(id);
        clearCart();

        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        console.log("hay productos fuera de stock");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="checkout-container">
        <h1>Placing order...</h1>
      </div>
    );
  }

  if (orderId) {
    return (
      <div className="checkout-container">
        <h2>Thanks for buying with us.</h2>
        <p>El id de su compra es: {orderId}</p>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="checkout-container">
        <h2>Cart can&apos;t be empty</h2>
      </div>
    );
  }

  return <CheckOutList createOrder={createOrder} />;
};

export default CheckOutContainer;
