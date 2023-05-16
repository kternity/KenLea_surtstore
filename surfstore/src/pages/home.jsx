import "./home.css";
import {Link} from 'react-router-dom';

function Home() {

   return ( 
   <div className="home">

      <h1>Welcome to our surfboard store</h1>
      <h4>Find your perfect board from our selections!</h4>
      <div className="container">
         <img className="home_picture1" src="/images/home_logo.jpg" alt=""></img>
         <p>Welcome to Ken and Lea’s surfshop where you find the sweetest brands with the most killer discounts.  We specialize in helping dudes, betties and groms reach their peak performance.  Whether you want to hang ten, get shacked or impress the wahinis on the beach, we have logs and whips you need. Let us know how we can get you your ultimate wavecount and help you achieve goat level surfing. </p>
      </div>
   </div>
   );
}

export default Home;
