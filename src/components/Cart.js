import { useDispatch } from "react-redux";
import { remove } from "../features/slices/cartsSlices";

const Cart = ({ cart }) => {
    const  { id, title, price } = cart;
    const dispatch = useDispatch()
    const handleRemove =() => {
        dispatch(remove(id));
    }
    
    return (
        <div>
            <p>{title}</p>
            <p>{price} $</p>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}

export default Cart;