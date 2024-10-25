import React from "react";

export default function List(props) {
  const { category, id, desc, img, price, title } = props.food;
  console.log("image path", img);

  return (
    <ul id="list">
      <li className="item">
        <div className="left">
          <img src={img} />
        </div>
        <div className="right">
          <div className="right-top">
            <p>{title}</p>
            <span>${price}</span>
          </div>
          <p>{desc}</p>
          <button className="common">Add to cart</button>
        </div>
        <span className="category">{category}</span>
      </li>
    </ul>
  );
}
