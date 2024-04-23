import "./App.css";
import Adv from "./components/adv/Adv";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Wishlist from "./pages/wishlist/Wishlist";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Adv />
      <Nav />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/products/:id"} element={<Product />} />
        <Route path={"/wishlist"} element={<Wishlist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
