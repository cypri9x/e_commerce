import "./ItemCart.css"
function ItemCart({ title, subtitle, description, image, count }) {

    return <div className="item-cart-container">
        <div>
            <span className="title">{title}</span>
            <span className="subtitle">{subtitle}</span>
            <span className="description">{description}</span>
            <span className="">{count}</span>
    
        </div>
        <div>
            
            <img className="item-cart-image" src={image} />
        </div>

    </div>
}
export default ItemCart;