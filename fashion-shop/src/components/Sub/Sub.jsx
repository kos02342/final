const Sub = () => {
  return (
    <>
      <div className="subscription center">
        <figure className="subscription__staff">
          <img src="/src/assets/face.svg" alt="лицо" />
          <p className="subscription__staff__figure-text">
            “Vestibulum quis porttitor dui! Quisque
            <br />{" "}
            <em>
              viverra nunc mi, a pulvinar purus
              <br />
              condimentum“
            </em>
          </p>
        </figure>
        <div className="subscription__input-email">
          <p className="subscription__input-email__text">
            <span className="subscription__input-email__title">SUBSCRIBE</span>
            <br />
            FOR OUR NEWLETTER AND PROMOTION
          </p>
          <div className="subscription__input-email__submit">
            <input
              className="subscription__input-email__submit__subscribe"
              type="email"
              required=""
              placeholder="Enter Your Email"
            />
            <input
              className="subscription__input-email__submit__btn"
              type="submit"
              defaultValue="Subscribe"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sub;
