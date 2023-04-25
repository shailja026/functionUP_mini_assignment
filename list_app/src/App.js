
import './App.css';
import { List } from './list/list';

function App() {

  const array = [
    {
      productId : "1",
      productPic : "https://images.pexels.com/photos/3076787/pexels-photo-3076787.jpeg?auto=compress&cs=tinysrgb&w=600",
      productName : "shoes",
      Brand : " Nine",
      productDescription : "Plaeto Unisex Adult Slam Multiplay Sports Shoes for Men & Women | Stylish Lightweight Sports Shoes with Tilt Lacing, Long Lasting Comfort & Non-Marking Outsole",
      Price : "Price : 1200 rs ",
      Rating : "Rating: 4.5/5"
      
   },
   {
    productId : "2",
    productPic : "https://images.pexels.com/photos/2639947/pexels-photo-2639947.jpeg?auto=compress&cs=tinysrgb&w=600",
    productName : "Eye_shadow",
    Brand : " Nayka",
    productDescription : "Plaeto Unisex Adult Slam Multiplay Sports Shoes for Men & Women | Stylish Lightweight Sports Shoes with Tilt Lacing, Long Lasting Comfort & Non-Marking Outsole",
    Price : "Price : 900 rs ",
    Rating : "Rating: 4.8/5"
    
 }, {
  productId : "3",
  productPic : "https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=600",
  productName : "Western red dress",
  Brand : " Urbanic",
  productDescription : "Plaeto Unisex Adult Slam Multiplay Sports Shoes for Men & Women | Stylish Lightweight Sports Shoes with Tilt Lacing, Long Lasting Comfort & Non-Marking Outsole",
  Price : "Price : 3200 rs ",
  Rating : "Rating: 4.4/5"
  
},
{
  productId : "4",
  productPic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP_7tQ1urqvyMYI8FW8-jR1zXxrxSdB0-06Q&usqp=CAU",
  productName : "T_shirt",
  Brand : "Adidas",
  productDescription : "Plaeto Unisex Adult Slam Multiplay Sports Shoes for Men & Women | Stylish Lightweight Sports Shoes with Tilt Lacing, Long Lasting Comfort & Non-Marking Outsole",
  Price : "Price : 1500 rs ",
  Rating : "Rating: 4.8/5"
  
},
{
  productId : "5",
  productPic : "https://images.pexels.com/photos/3989394/pexels-photo-3989394.jpeg?auto=compress&cs=tinysrgb&w=600",
  productName : "Perfume",
  Brand : "Sknn",
  productDescription : "Plaeto Unisex Adult Slam Multiplay Sports Shoes for Men & Women | Stylish Lightweight Sports Shoes with Tilt Lacing, Long Lasting Comfort & Non-Marking Outsole",
  Price : "Price : 1200 rs ",
  Rating : "Rating: 4.9/5"
  
},
{
  productId : "6",
  productPic : "https://images.samsung.com/in/smartphones/galaxy-s22-ultra/buy/S22Ultra_ColorSelection_Burgundy_MO.jpg?imwidth=480",
  productName : "Samsumg s22",
  Brand : "Samsung s22",
  productDescription : "Plaeto Unisex Adult Slam Multiplay Sports Shoes for Men & Women | Stylish Lightweight Sports Shoes with Tilt Lacing, Long Lasting Comfort & Non-Marking Outsole",
  Price : "Price : 1,12,000 rs ",
  Rating : "Rating: 4.9/5"
  
}




  ]
  return (
    <div className="App">
   {array.map((Element , ind) =>
   <List 
   obj = {Element}
   />
   )}
    </div>
  );
}

export default App;
