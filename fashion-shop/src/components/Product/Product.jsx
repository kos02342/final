// import './Product.css'

const Product = ({src, alt, heading, text, price}) => {
  return (
    <>
      <div className="product">
        <div className="product__picturebox">
          <div className="product__picturebox__itemHover">
            <button className="product__picturebox__buy-button">
              <img
                src="/src/assets/Vector.svg"
                alt="корзина"
                className="product__picturebox__buy-button-img"
              />
              Add to Cart
            </button>
          </div>
          <img
            src={src}
            alt={alt}
            className="product__picturebox__img"
          />
        </div>
        <div className="product__content">
          <h5 className="product__content__heading">{heading}</h5>
          <p className="product__content__text">
            {text}
          </p>
          <p className="product__content__price">{price}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
