import { Link } from "react-router-dom";
import ROUTES from "../../routes";

const Header = () => {
  return (
    <header className="header center">
      <div className="header__left">
        <Link to={ROUTES.MAINPAGE}>
          <img src="/src/assets/top__menu__logo.svg" alt="логотип" />
        </Link>

        <a href="#">
          <img src="/src/assets/top__menu__search.svg" alt="поиск" />
        </a>
      </div>
      <nav className="header__right">
        <label htmlFor="header__check">
          <img src="/src/assets/top__menu__menu.svg" alt="меню" />
        </label>

        <Link to={ROUTES.REGISTERPAGE}>
          <img src="/src/assets/top__menu__profile.svg" alt="личный профиль" />
        </Link>


        <Link to={ROUTES.CARTPAGE} className="header__link-site">
        <img src="/src/assets/top__menu__basket.svg" alt="корзина" />
        </Link>
    
      </nav>
      <input
        className="header__checkbox"
        id="header__check"
        type="checkbox"
        defaultChecked=""
      />
      <div className="mobile-menu">
        <h3 className="mobile-menu__heading">MENU</h3>
        <div className="mobile-menu__box">
          <div className="mobile-menu__item">
            <a href="#" className="mobile-menu__title">
              MAN
            </a>
            <ul className="mobile-menu__list">
              <li>
                <a className="mobile-menu__link" href="#">
                  Accessories
                </a>
              </li>
              <li>
                <a className="mobile-menu__link" href="#">
                  Bags
                </a>
              </li>
              <li>
                <a className="mobile-menu__link" href="#">
                  Denim
                </a>
              </li>
              <li>
                <a className="mobile-menu__link" href="#">
                  T-Shirts
                </a>
              </li>
            </ul>
          </div>
          <div className="mobile-menu__item">
            <a href="#" className="mobile-menu__title">
              WOMAN
            </a>
            <ul className="mobile-menu__list">
              <li>
                <a className="mobile-menu__link" href="">
                  Accessories
                </a>
              </li>
              <li>
                <a className="mobile-menu__link" href="">
                  Jackets &amp; Coats
                </a>
              </li>
              <li>
                <a className="mobile-menu__link" href="">
                  Polos
                </a>
              </li>
              <li>
                <a className="mobile-menu__link" href="">
                  T-Shirts
                </a>
              </li>
              <li>
                <a className="mobile-menu__link" href="">
                  Shirts
                </a>
              </li>
            </ul>
          </div>
          <div className="mobile-menu__item">
            <a href="#" className="mobile-menu__title">
              KIDS
            </a>
            <ul className="mobile-menu__list">
              <li>
                <a className="mobile-menu__link" href="">
                  Accessories
                </a>
              </li>
              <li>
                <a className="mobile-menu__link" href="">
                  Jackets &amp; Coats
                </a>
              </li>
              <li>
                <a className="mobile-menu__link" href="">
                  Polos
                </a>
              </li>
              <li>
                <a className="mobile-menu__link" href="">
                  T-Shirts
                </a>
              </li>
              <li>
                <a className="mobile-menu__link" href="">
                  Shirts
                </a>
              </li>
              <li>
                <a className="mobile-menu__link" href="">
                  Bags
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
