import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import ContactForm from "../Form/ContactForm";
import { db } from '../../Services/Firebase/firebaseConfig'
import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const [loading, setLoading] = useState(false)
  const { cart, total, clearCart } = useContext(CartContext)
  const [orderId, setOrderId] = useState('')
  const navigate = useNavigate();


  const createOrder = async () => {
    setLoading(true)

    try {
      const objOrder = {
        buyer: {
          name: 'pedro',
          phone: '123345',
          email: 'contact@hehe.com'
        },
        items: cart,
        total
      }

      const batch = writeBatch(db)

      const ids = cart.map(prod => prod.id)
      const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

      const productsAddedToCartFromFirestore = await getDocs(productsRef);
      const { docs } = productsAddedToCartFromFirestore;

      const outOfStock = []


      docs.forEach(doc => {
        const dataDoc = doc.data()
        const stockDb = dataDoc.stock

        const productAddedToCart = cart.find(prod => doc.id === prod.id)
        const prodQuantity = productAddedToCart.qty

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity })
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc })
        }
      })

      if (outOfStock.length === 0) {
        await batch.commit()

        const orderRef = collection(db, 'orders')

        const orderAdded = await addDoc(orderRef, objOrder)

        const { id } = orderAdded

        setOrderId(id)

        clearCart()

        setTimeout(() => {
          navigate('/')
        }, 3000);

      } else {
        console.log('hay productos fuera de stock');
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }

  }


  if (loading) {
    return <h1>Placing order...</h1>
  }

  if (orderId) {
    return (
      <div>
        <h2>El id de su compra es: {orderId}</h2>
      </div>
    )
  }

  if (cart.length === 0) {
    return (
      <h2>Cart can't be empty</h2>
    )
  }



  return (
    <div>
      <h1>CheckOut</h1>
      {cart.map(prod =>
        <div key={prod.id}>{prod.qty}<img src={prod.img} style={{ width: '5%' }} alt={prod.name} /> {prod.name} ${prod.price}
        </div>

      )}
      <h2>Total: ${total}</h2>
      <ContactForm placeOrder={createOrder} />
      <button onClick={createOrder}>Place Order</button>
    </div>
  );

}

export default CheckOut;