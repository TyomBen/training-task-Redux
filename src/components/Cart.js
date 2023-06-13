import { useDispatch } from "react-redux";
import { remove } from "../features/slices/cartsSlices";
import './styles.css'
const Cart = ({ cart, countIncrement, countDecrement, className }) => {
    const { id, title, price } = cart;
    const dispatch = useDispatch();
    const handleRemove = () => {
        dispatch(remove(id));
    }

    return (
        <div className={className}>
            <p>{title}</p>
            <p>{price} $</p>
            <button onClick={() => dispatch(countIncrement(id))}>+</button>
            <button onClick={() => dispatch(countDecrement(id))}>-</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}

export default Cart;
