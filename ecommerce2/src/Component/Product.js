import React from "react";
import { Link } from "react-router-dom";

function Product(props) {
  const { product, ShowDetailsButton, ShowDescription, Price } = props;
  return (
    <div className="card">
      <img
        src={product.image}
        className="card-img-top p-2"
        alt="..."
        style={{ width: "200px", height: "200px" }} // Set the fixed size here
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
      </div>
      <div className="card-body">
        {ShowDetailsButton && (
          <Link to={`product/${product.id} `} className="btn btn-info">
            Details
          </Link>
        )}
        {ShowDescription && <p>{product.description}</p>}
      </div>
      {Price && <h4 className="card-text">{product.price}$</h4>}
    </div>
  );
}

export default Product;
