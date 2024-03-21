import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Sub from "../components/Sub/Sub";
import TopHead from "../components/TopHead/TopHead";
import { useEffect, useState } from "react";
import CartProduct from "../components/CartProduct/CartProduct";

const CartPage = () => {
  const [totalPrice, setTotalPrice] = useState(0)

  const [cartProducts, setCartProducts] = useState([
    {
      id: 1,
      title: 'MANGO PEOPLE T-SHIRT',
      src: '/src/assets/product-selection/product-selection001.jpg',
      price: 1000,
      color: 'Red',
      size: 'XL',
      quantity: 1,
    },

    {
      id: 2,
      title: 'MANGO PEOPLE T-SHIRT',
      src: '/src/assets/product-selection/product-selection002.jpg',
      price: 300,
      color: 'Red',
      size: 'XL',
      quantity: 1,
    },


  ])

  const grandTotal = () => {
    let totalSum = 0
    cartProducts.forEach((el) => {
      totalSum += el.quantity * el.price
    })

    setTotalPrice(totalSum)


  }

  const changeQuantity = (id, quantity) => {
    setCartProducts(cartProducts.map(product => {
      if (product.id === id) {
        return {
          ...product,
          quantity: quantity
        };
      } else {
        return product;
      }
    }));

  }

  useEffect(() => {
    grandTotal()
  }, [cartProducts])


  return (
    <div>
      <>
        <Header />
        <TopHead title={'SHOPPING CART'}/>
        <div className="product-selection center">
          <div className="product-selection__card">

            {cartProducts.map((cartProduct) => (
              <CartProduct key={cartProduct.id} src={cartProduct.src} title={cartProduct.title} price={cartProduct.price} color={cartProduct.color} size={cartProduct.size} id={cartProduct.id} changeQuantity={changeQuantity}/>
            ))}
            <div className="product-selection__buttons">
              <button className="product-selection__button">
                CLEAR SHOPPING CART
              </button>
              <button className="product-selection__button">
                CONTINUE SHOPPING
              </button>
            </div>  
          </div>
          <div className="product-selection__info">
            <div className="product-selection__info__address">
              <h5 className="product-selection__info__address-title">
                SHIPPING ADRESS
              </h5>
              <input
                className="product-selection__info__address-input"
                type="text"
                placeholder="City"
              />
              <input
                className="product-selection__info__address-input"
                type="text"
                placeholder="State"
              />
              <input
                className="product-selection__info__address-input"
                type="number"
                placeholder="Postcode / Zip"
              />
              <input
                className="product-selection__info__address-submit"
                type="submit"
                defaultValue="GET A QUOTE"
              />
            </div>
            <div className="product-selection__purchase">
              <p className="product-selection__purchase__price-first">
                SUB TOTAL
              </p>
              <p className="product-selection__purchase__price-second">
                GRAND TOTAL
                <span style={{paddingLeft: '25px', color: '#F16D7F'}}> ${totalPrice}</span>
              </p>
              <div className="product-selection__purchase__line" />
              <button className="product-selection__purchase__button">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
        <Sub />
        <Footer />
      </>
    </div>
  );
};

export default CartPage;
