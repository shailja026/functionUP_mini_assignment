import logo from './logo.svg';
import './App.css';
import { Shoping_card } from './Shoping_card/shop';

function App() {
  const productDetails = {
    productId : "1",
    productPic : "https://images.pexels.com/photos/4219175/pexels-photo-4219175.jpeg?auto=compress&cs=tinysrgb&w=600",
    productName : "shoes",
    Brand : " Nine",
    productDescription : "Plaeto Unisex Adult Slam Multiplay Sports Shoes for Men & Women | Stylish Lightweight Sports Shoes with Tilt Lacing, Long Lasting Comfort & Non-Marking Outsole",
    Price : "Price : 1200 rs ",
    Rating : "Rating: 4.5/5"
    
 }
 



  return (
    <div className="App">
      <div className="firstRow">
     <Shoping_card
      detail = {productDetails}
     />
      <Shoping_card
      detail = {productDetails}
     />
      <Shoping_card
      detail = {productDetails}
     />
     </div>
     <div className="secondRow">
     <Shoping_card
      detail = {productDetails}
     />
      <Shoping_card
      detail = {productDetails}
     />
     
     </div>
    </div>
  );
}

export default App;
