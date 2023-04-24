import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
    <Card  image="https://media.licdn.com/dms/image/C5603AQEgzoyp6PA72g/profile-displayphoto-shrink_400_400/0/1652029080190?e=1687996800&v=beta&t=E6nde0o-FxmF0mpBy6YbLC9mTmZLKkQoHaTqr-II_6M" designation="Web developer" name= "Shailja Gupta" />



    <Card  image="https://media.licdn.com/dms/image/D4D03AQHn6tXfvkksow/profile-displayphoto-shrink_400_400/0/1670607724485?e=1687996800&v=beta&t=TL5xIm0cn2wdgo6G4VIA3E-Ang5NwrB5ZXpyYoAmt9Q" designation="Full Stack Web developer" name= "Harshit Sachan" />



    <Card  image="https://media.licdn.com/dms/image/D4D03AQEcQDJE3z2hnQ/profile-displayphoto-shrink_100_100/0/1677334331083?e=1687996800&v=beta&t=3Tw9S3n74s2Ws2kLKH7A-OGyrLF6bwvU7fdAM8yQF_o" designation="Front_end_developer" name= "Apurva Sonami" />
       
    </div>
  );
}

export default App;
