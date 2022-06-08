import { useCustomContext } from "../../store/CustomContext";
import ItemCart from "./ItemCart";

function Cart ()
{
    const { state, dispatch } = useCustomContext();

    return <div>{state.cart.map((itemCart) => {return <ItemCart title={itemCart.title} subtitle={itemCart.subtitle} description={itemCart.description} image={itemCart.image}/>})}</div>;
}
export default Cart;
