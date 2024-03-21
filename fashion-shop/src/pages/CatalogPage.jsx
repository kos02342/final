import { useState } from "react";

import Advantages from "../components/Advantages/Advantages";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Product from "../components/Product/Product";
import Sub from "../components/Sub/Sub";

import "../../src/index.css";
import { products } from "../products";
import TopHead from "../components/TopHead/TopHead";

const CatalogPage = () => {
  const [productList, setProductList] = useState([...products]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleSelectSize = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };
  const filterArray = productList.filter((product) => {
    if (selectedSizes.length === 0) {
      return true;
    } else {
      return selectedSizes.includes(product.size);
    }
  });

  return (
    <>
      <>
        <Header />
        <TopHead title={'NEW ARRIVALS'} breadcrumbs="true"/>
        <div className="filter-sort center">
          <details className="filter">
            <summary className="filter__summary">
              <span className="filter__heading">FILTER</span>
              <svg
                width={15}
                height={10}
                viewBox="0 0 15 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
                  fill="black"
                />
              </svg>
            </summary>
            <div className="filter__content">
              <details className="filter__item">
                <summary className="filter__head">CATEGORY</summary>
                <div className="filter__link-box">
                  <a href="#" className="filter__link">
                    Accessories
                  </a>
                  <a href="#" className="filter__link">
                    Bags
                  </a>
                  <a href="#" className="filter__link">
                    Denim
                  </a>
                  <a href="#" className="filter__link">
                    Hoodies &amp; Sweatshirts
                  </a>
                  <a href="#" className="filter__link">
                    Jackets &amp; Coats
                  </a>
                  <a href="#" className="filter__link">
                    Polos
                  </a>
                  <a href="#" className="filter__link">
                    Shirts
                  </a>
                  <a href="#" className="filter__link">
                    Shoes
                  </a>
                  <a href="#" className="filter__link">
                    Sweaters &amp; Knits
                  </a>
                  <a href="#" className="filter__link">
                    T-Shirts
                  </a>
                  <a href="#" className="filter__link">
                    Tanks
                  </a>
                </div>
              </details>
              <details className="filter__item">
                <summary className="filter__head">BRAND</summary>
                <div className="filter__link-box">
                  <a href="" className="filter__link">
                    Accessories
                  </a>
                  <a href="" className="filter__link">
                    Bags
                  </a>
                  <a href="" className="filter__link">
                    Denim
                  </a>
                  <a href="" className="filter__link">
                    Hoodies &amp; Sweatshirts
                  </a>
                  <a href="" className="filter__link">
                    Jackets &amp; Coats
                  </a>
                  <a href="" className="filter__link">
                    Polos
                  </a>
                  <a href="" className="filter__link">
                    Shirts
                  </a>
                  <a href="" className="filter__link">
                    Shoes
                  </a>
                  <a href="" className="filter__link">
                    Sweaters &amp; Knits
                  </a>
                  <a href="" className="filter__link">
                    T-Shirts
                  </a>
                  <a href="" className="filter__link">
                    Tanks
                  </a>
                </div>
              </details>
              <details className="filter__item">
                <summary className="filter__head">DESIGNER</summary>
                <div className="filter__link-box">
                  <a href="" className="filter__link">
                    Accessories
                  </a>
                  <a href="" className="filter__link">
                    Bags
                  </a>
                  <a href="" className="filter__link">
                    Denim
                  </a>
                  <a href="" className="filter__link">
                    Hoodies &amp; Sweatshirts
                  </a>
                  <a href="" className="filter__link">
                    Jackets &amp; Coats
                  </a>
                  <a href="" className="filter__link">
                    Polos
                  </a>
                  <a href="" className="filter__link">
                    Shirts
                  </a>
                  <a href="" className="filter__link">
                    Shoes
                  </a>
                  <a href="" className="filter__link">
                    Sweaters &amp; Knits
                  </a>
                  <a href="" className="filter__link">
                    T-Shirts
                  </a>
                  <a href="" className="filter__link">
                    Tanks
                  </a>
                </div>
              </details>
            </div>
          </details>
          <div className="sort">
            <details className="sort__details">
              <summary className="sort__summary">
                <span className="sort__heading">TRENDING NOW</span>
                <svg
                  width={11}
                  height={6}
                  viewBox="0 0 11 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                    fill="#6F6E6E"
                  />
                </svg>
              </summary>
            </details>
            <details className="sort__details">
              <summary className="sort__summary">
                <span className="sort__heading">SIZE</span>
                <svg
                  width={11}
                  height={6}
                  viewBox="0 0 11 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                    fill="#6F6E6E"
                  />
                </svg>
              </summary>
              <div className="sort__box">
                {["XS", "S", "M", "L"].map((size) => (
                  <div key={size} className="sort__check">
                    <input
                      onChange={() => handleSelectSize(size)}
                      id={`sort__check${size}`}
                      type="checkbox"
                      checked={selectedSizes.includes(size)}
                    />
                    <label htmlFor={`sort__check${size}`}>{size}</label>
                  </div>
                ))}
              </div>
            </details>
            <details className="sort__details">
              <summary className="sort__summary">
                <span className="sort__heading">PRICE</span>
                <svg
                  width={11}
                  height={6}
                  viewBox="0 0 11 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                    fill="#6F6E6E"
                  />
                </svg>
              </summary>
            </details>
          </div>
        </div>
        <main className="main-product">
          <section className="main-product__bottom main-product__bottom_catalog center">
            <div className="main-product__bottom__items">
              {filterArray.map((product) => (
                <Product
                  key={product.id}
                  src={product.src}
                  alt={product.alt}
                  heading={product.heading}
                  text={product.text}
                  price={product.price}
                  size={product.size}
                />
              ))}
            </div>
          </section>
        </main>
        <div className="breadcrumbs center">
          <div className="breadcrumbs__box">
            <svg
              width={9}
              height={14}
              viewBox="0 0 9 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.995 2L3.995 7L8.995 12L7.995 14L0.994995 7L7.995 0L8.995 2Z"
                fill="black"
              />
            </svg>
            <div className="breadcrumbs__items">
              <a className="breadcrumbs__link" href="#">
                1
              </a>
              <a className="breadcrumbs__link" href="#">
                2
              </a>
              <a className="breadcrumbs__link" href="#">
                3
              </a>
              <a className="breadcrumbs__link" href="#">
                4
              </a>
              <a className="breadcrumbs__link" href="#">
                5
              </a>
              <a className="breadcrumbs__link" href="#">
                6.....20
              </a>
            </div>
            <svg
              width={9}
              height={14}
              viewBox="0 0 9 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.994995 12L5.995 7L0.994995 2L1.995 0L8.995 7L1.995 14L0.994995 12Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <Advantages />
        <Sub />
        <Footer />
      </>
    </>
  );
};

export default CatalogPage;
