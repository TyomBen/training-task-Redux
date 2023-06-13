import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import {
  calculateAmount,
  calculateTotal,
  clearAllData,
  countIncrement,
  countDecrement,
} from "../features/slices/cartsSlices";
import { useEffect } from "react";

const Carts = () => {
  const { data, totalPrice, amount } = useSelector(({ carts }) => carts);
  const dispatch = useDispatch();
  dispatch(calculateAmount(amount));
  useEffect(() => {
    dispatch(calculateTotal());
    //dispatch(calculateAmount());
  }, [data]);

  return data.length ? (
    <div className="container">
      <div className="cart-summary">
        <p>Amount: {amount}</p>
        <p>Total Price: {totalPrice}</p>
      </div>
      {data.map((cart) => {
        const { id } = cart;
        return (
          <Cart
            key={id}
            cart={cart}
            countIncrement={countIncrement}
            countDecrement={countDecrement}
            className="cart-item"
          />
        );
      })}
      <button onClick={() => dispatch(clearAllData())}>Clear All</button>
    </div>
  ) : (
    <>
      <a href="/" style={{ textDecoration: "none", color: "black", fontSize : '20px' }}>
        Back
      </a>
      <h1>is currently empty</h1>
    </>
  );
};

export default Carts;
