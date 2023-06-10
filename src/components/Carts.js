import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import { calculateAmount, calculateTotal, clearAllData } from "../features/slices/cartsSlices";
import { useEffect } from "react";

const Carts =() => {
    const {data: carts, totalPrice, amount} = useSelector(state =>  state.carts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateTotal());
        dispatch(calculateAmount());
    }, [carts])

    return (
        <div>
            <>
            <p>  Amount: {amount} </p>
            <p>  Total Price:  {totalPrice} </p>
            </>
            {
                carts.map((cart) => {
                    return (
                        <Cart key={cart.id} cart={cart} />
                    )
                })
            }

            <button onClick={() => dispatch(clearAllData())}>Clear All </button>


        </div>
    )
}

export default Carts;