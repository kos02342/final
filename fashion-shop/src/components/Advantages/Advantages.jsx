import React from "react";

const Advantages = () => {
  return (
    <>
      <div className="advantages center">
        <article className="advantages__item">
          <img src="/src/assets/advantages1.svg" alt="машина" />
          <h3 className="advantages__item__heading">Free Delivery</h3>
          <p className="advantages__item__text">
            Worldwide delivery on all. Authorit tively morph <br />{" "}
            next-generation innov tion with extensive models.
          </p>
        </article>
        <article className="advantages__item">
          <img src="/src/assets/advantages2.svg" alt="процент" />
          <h3 className="advantages__item__heading">Sales &amp; discounts</h3>
          <p className="advantages__item__text">
            Worldwide delivery on all. Authorit tively morph <br />{" "}
            next-generation innov tion with extensive models.
          </p>
        </article>
        <article className="advantages__item">
          <img src="/src/assets/advantages3.svg" alt="корона" />
          <h3 className="advantages__item__heading">Quality assurance</h3>
          <p className="advantages__item__text">
            Worldwide delivery on all. Authorit tively morph <br />{" "}
            next-generation innov tion with extensive models.
          </p>
        </article>
      </div>
    </>
  );
};

export default Advantages;
