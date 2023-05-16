import './about.css';

function About() {
   return (
    
      <div className="about">
         <h2>Ken & Lea's Surfboard Store</h2>
         <h6>e-mail: kenleasurfboard@gmail.com</h6>
         <h6>Phone: 818-303-2222</h6>
         <h6>Address: 331 California Ave. San Diego CA 91919</h6>
         <br></br>
               
         <h3>Ken "moondoggy" Chung</h3>
            <img className="about_picture" src="/images/ken.avif" alt=""></img>
            <p>After 8 years in the Army, Ken spent 4 gnarly winters in Hawaii longboarding Waikiki and hanging ten.  On his 3rd trip back the locals nicknamed him “Moondoggy”, credit to his long noserides and tubular sessions.  He wanted to create a way for his barney Army homies to get solid gear at a sick price, and his stoke for that led him to coding bootcamp to build an online spot where the gear was fresh.  Moondoggy now likes to shred near his home by Tressles in California while is 4 groms catch the vibe from the beach.  He’ll have his youngest up and shralping before he can walk.</p>

         <h3>Lea "Slaysister" Potts</h3>
            <img className="about_picture" src="/images/lea.jpg" alt=""></img>
            <p>Lea grew up on the flatwater of the sound and migrated east to the gnarly breakers of Hatteras Island.  She joined the Navy and went from being a squadron squid to a “Slaysister” when she got bit by the surf bug while stationed in San Diego.  She went full send into the kiteboarding stratosphere and leveled up into waveriding and surfing. When she’s not boosting sick air on a kite, you’ll find her tubing and trimming in monster waves.  Slaysister is super stoked on helping Ken build the sickest site for barneys aspiring to a lead level of surfing.</p>         
      </div>
   );
}

export default About;