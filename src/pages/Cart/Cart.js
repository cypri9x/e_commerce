import { useCustomContext } from "../../store/CustomContext";
import ItemCart from "./ItemCart";
import "./Cart.css"

function Cart() {
    const { state, dispatch } = useCustomContext();

    return <div className="cart-container">
        <div>
            {state.cart.map((itemCart) => { return <ItemCart title={itemCart.title} subtitle={itemCart.subtitle} description={itemCart.description} image={itemCart.image} /> })}
        </div>
    </div>;
}
export default Cart;
