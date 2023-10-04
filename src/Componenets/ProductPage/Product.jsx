import React from "react";
import { useStateValue } from "../State/StateProvider";
import "../ProductPage/product.css";


function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });

  }


  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="ProductImage" />

      <button onClick={addToBasket} className="add-basket">Add to Basket</button>
    </div>
  );
}

export default Product;
