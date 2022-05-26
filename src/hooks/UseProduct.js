import { useEffect, useState } from "react";

const useProduct = (user) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://infinite-ocean-88607.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
};
export default useProduct;
