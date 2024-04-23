import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import SellingProducts from "../../components/sellingProducts/SellingProducts";
import Categories from "../../components/categories/Categories";
import Products from "../../components/products/Products";
import axios from "../../api";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setData(res.data.products))
      .catch((res) => console.log(res));
  }, []);
  return (
    <>
      <Header />
      <SellingProducts />
      <Categories />
      <Products data={data} />
    </>
  );
}

export default Home;
