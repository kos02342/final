import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Sub from "../components/Sub/Sub";
import Advantages from "../components/Advantages/Advantages";
import Product from "../components/Product/Product";
import { Link } from "react-router-dom";
import ROUTES from "../routes";

const MainPage = () => {
  return (
    <>
      <div className="top">
        <Header />
        <section className="promo">
          <div className="promo__img">
            <img src="/src/assets/header__img.svg" alt="фото с моделью" />
          </div>
          <div className="promo__content">
            <div className="promo__info">
              <h1 className="promo__title">THE BRAND</h1>
              <h2 className="promo__heading">
                OF LUXERIOUS <span style={{ color: "#F16D7F" }}>FASHION</span>
              </h2>
            </div>
          </div>
        </section>
        <section className="sale center">
          <div className="sale__item">
            <div className="sale__content">
              <p className="sale__text">30% OFF</p>
              <h3 className="sale__heading">FOR WOMEN</h3>
            </div>
            <img
              src="/src/assets/advertisement001.jpg"
              alt="sale image"
              className="img__sale"
            />
          </div>
          <div className="sale__item">
            <div className="sale__content">
              <p className="sale__text">HOT DEAL</p>
              <h3 className="sale__heading">FOR MEN</h3>
            </div>
            <img
              src="/src/assets/advertisement002.jpg"
              alt="sale image"
              className="img__sale"
            />
          </div>
          <div className="sale__item">
            <div className="sale__content">
              <p className="sale__text">NEW ARRIVALS</p>
              <h3 className="sale__heading">FOR KIDS</h3>
            </div>
            <img
              src="/src/assets/advertisement003.jpg"
              alt="sale image"
              className="img__sale"
            />
          </div>
          <div className="sale__item sale__item__big">
            <div className="sale__content">
              <p className="sale__text">LUXIROUS &amp; TRENDY</p>
              <h3 className="sale__heading">ACCESORIES</h3>
            </div>
            <img
              src="/src/assets/advertisement004.jpg"
              alt="sale image"
              className="img__big"
            />
          </div>
        </section>
        <section className="product-box center">
          <h2 className="product-box__heading">Fetured Items</h2>
          <p className="product-box__text">
            Shop for items based on what we featured in this week
          </p>
          <div className="product-box__content">
      
            <Product
              src={"/src/assets/top__info_img001.svg"}
              alt={"photo 001"}
              heading={`ELLERY X M'O CAPSULE`}
              text={`Known for her sculptural takes on traditional
                  tailoring, Australian arbiter of cool Kym Ellery teams
                  up with Moda Operandi.`}
              price={'$52.00'}
            />

            
            <Product
              src={"/src/assets/top__info_img002-2.svg"}
              alt={"photo 002"}
              heading={`ELLERY X M'O CAPSULE`}
              text={`Known for her sculptural takes on traditional
                  tailoring, Australian arbiter of cool Kym Ellery teams
                  up with Moda Operandi.`}
              price={'$52.00'}
            />
       
            <Product
              src={"/src/assets/top__info_img003.svg"}
              alt={"photo 003"}
              heading={`ELLERY X M'O CAPSULE`}
              text={`Known for her sculptural takes on traditional
                  tailoring, Australian arbiter of cool Kym Ellery teams
                  up with Moda Operandi.`}
              price={'$52.00'}
            />

            <Product
              src={"/src/assets/top__info_img004.svg"}
              alt={"photo 004"}
              heading={`ELLERY X M'O CAPSULE`}
              text={`Known for her sculptural takes on traditional
                  tailoring, Australian arbiter of cool Kym Ellery teams
                  up with Moda Operandi.`}
              price={'$52.00'}
            />

            <Product
              src={"/src/assets/top__info_img005.svg"}
              alt={"photo 005"}
              heading={`ELLERY X M'O CAPSULE`}
              text={`Known for her sculptural takes on traditional
                  tailoring, Australian arbiter of cool Kym Ellery teams
                  up with Moda Operandi.`}
              price={'$52.00'}
            />
            
            <Product
              src={"/src/assets/top__info_img006.svg"}
              alt={"photo 006"}
              heading={`ELLERY X M'O CAPSULE`}
              text={`Known for her sculptural takes on traditional
                  tailoring, Australian arbiter of cool Kym Ellery teams
                  up with Moda Operandi.`}
              price={'$52.00'}
            />
          </div>
          <div className="product-box__button">
            <Link className="product-box__button__text" to={ROUTES.CATALOGPAGE}>
              Browse All Product
            </Link>
          </div>
        </section>
        <Advantages />
        <Sub />
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
