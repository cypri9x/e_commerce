function ItemCart ({title,subtitle,description,image}){

    return <div>
        <div>{title} {subtitle} {description}</div>
        <img src={image}/>
    </div>
}
export default ItemCart;