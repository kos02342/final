import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import ROUTES from "../../routes";

import MainPage from "../../pages/MainPage";
import CatalogPage from "../../pages/CatalogPage";
import CartPage from "../../pages/CartPage";
import ProductPage from '../../pages/ProductPage'
import RegisterPage from '../../pages/RegisterPage'


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route index path={ROUTES.MAINPAGE} element={<MainPage/>}/>
        <Route path={ROUTES.CATALOGPAGE} element={<CatalogPage/>}/>
        <Route path={ROUTES.CARTPAGE} element={<CartPage/>}/>
        <Route path={ROUTES.PRODUCTPAGE} element={<ProductPage/>}/>
        <Route path={ROUTES.REGISTERPAGE} element={<RegisterPage/>}/>
      </Routes>
    </>
  )
};

export default AppRoutes;
