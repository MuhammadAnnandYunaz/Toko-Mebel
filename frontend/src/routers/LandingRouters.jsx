import { Routes, Route} from "react-router-dom";
import HomePage from "../pages/LandingPage/HomePage.jsx";
import ShopPage from "../pages/LandingPage/ShopPage.jsx";
import AccountPage from "../pages/LandingPage/AccountPage.jsx";
import Cart from "../pages/LandingPage/Cart.jsx";
import DetailProduct from "../pages/LandingPage/DetailProduct.jsx";
import ProfilUser from "../pages/LandingPage/ProfilUser.jsx";
import NotPage from "../pages/LandingPage/NotPage.jsx";
import "../styles/index.css";


const LandingRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/shop/:id" element={<DetailProduct />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/account/profile" element={<ProfilUser />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotPage />} />
    </Routes>
  );
};

export default LandingRouters;
