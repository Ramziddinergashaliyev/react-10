import React, { useEffect, useState } from "react";
import axios from "../../../api";
import "./products.scss";
import Menu from "../../../components/menu/Menu";
import Text from "../../../components/text/Text";

function Products() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios
      .get(`/products`)
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  const productsTable = products?.map((el) => (
    <tr key={el.id}>
      <td>
        <img src={el.thumbnail} alt="" />
      </td>
      <td>{el.brand}</td>
      <td>{el.category}</td>
      <td>{el.discountPercentage}</td>
      <td>{el.price}</td>
      <td>{el.title}</td>
    </tr>
  ));

  return (
    <div>
      <Menu />
      <Text />
      <table className="table">
        <tr>
          <th>Img</th>
          <th>Brand</th>
          <th>Category</th>
          <th>Discount</th>
          <th>Price</th>
          <th>Title</th>
        </tr>
        {productsTable}
      </table>
    </div>
  );
}

export default Products;
