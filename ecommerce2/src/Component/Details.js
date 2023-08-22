import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function Details() {
  const api_Url = "https://fakestoreapi.com/products/";
  const params = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`${api_Url}/${params.productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <>
      <Product
        product={product}
        ShowDetailsButton={false}
        ShowDescription={true}
        Price={true}
      />
    </>
  );
}
export default Details;
