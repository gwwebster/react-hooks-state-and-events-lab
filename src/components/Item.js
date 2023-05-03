import React, { useState } from "react";

function Item({ name, category }) {

  const [liClass, setLiClass] = useState("");

  const buttonText = liClass === "" ? "Add to Cart" : "Remove From Cart";
  const buttonClass = liClass === "" ? "add" : "remove";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={() => liClass === "" ? setLiClass("in-cart") : setLiClass("")}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
