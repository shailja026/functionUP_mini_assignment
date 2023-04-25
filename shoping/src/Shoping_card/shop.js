import "./shop.css"

export const Shoping_card = ( {detail}) => {
    const addToCard=()=>{
        alert(" ‘Product of is  1 , which is Shoes of brand Adidas has of rupees 4000 is added in the cart , please proceed to pay !!! ’")
    }

    return (
        <div className= "item">
        <img src={detail.productPic} alt = ""/>
        <h2>{detail.Brand}</h2>
        <p>{detail.productDescription} 
</p>
        <h3>{detail.Price}</h3>
        <p>{detail.Rating}</p>
        <button onClick = {addToCard}>ADD TO CARD</button>
        </div>
    )

}