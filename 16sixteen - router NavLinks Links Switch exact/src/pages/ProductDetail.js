import React from "react";
import { Link, useParams } from 'react-router-dom';

function ProductDetail() {
    const params = useParams();
    console.log(params.productId)
  return (
    <section>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
      <Link to="/products">Back</Link>
    </section>
  );
}

export default ProductDetail;
