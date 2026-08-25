import "./App.css";
import {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import RecipeCard from "./components/RecipeCard";
import pizza from "./images/pizza.jpg";
import pasta from "./images/pasta.jpg";
import biryani from "./images/biryani.jpg";
import masaladosa from "./images/masala-dosa.jpg";
import idli from "./images/idli.jpg";
import pongal from "./images/pongal.jpg";
import bisibeleBhath from "./images/bisibele-bhath.jpg";
import lemonRice from "./images/lemon-rice.jpg";
import puliyogre from "./images/puliyogre.jpg";
import uttapam from "./images/uttapam.jpg";
import sambar from "./images/sambar.jpg";
import rasam from "./images/rasam.jpg";
import akkiRotti from "./images/akki-rotti.jpg";
import AboutContact from "./components/AboutContact";

function App(){
  const[recipesVisible,setRecipesVisible]=useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [homeVisible, setHomeVisible] = useState(true);

  return(
    <div>

      <div>
       <Header setHomeVisible={setHomeVisible}
        setAboutVisible={setAboutVisible}
        setRecipesVisible={setRecipesVisible}/>
    {homeVisible && (
    <Hero setHomeVisible={setHomeVisible}
          setRecipesVisible={setRecipesVisible}
          setAboutVisible={setAboutVisible}/>
)}
    </div>
     
     {recipesVisible && (<div className="recipes" id="recipes">
      <RecipeCard title= "Pizza" description="Delicious cheesy pizza" image={pizza} recipe="A cheesy pizza made with tomato sauce, mozzarella cheese, and your favorite toppings. Bake until the cheese is golden and bubbly."/>
      <RecipeCard title="Pasta" description="Delicious cheesy pasta" image={pasta} recipe="Creamy pasta cooked with a flavorful sauce, herbs, and cheese."/>
      <RecipeCard title="Biryani" description="Delicious biryani" image={biryani} recipe="Fragrant rice cooked with aromatic spices and flavorful ingredients. Serve hot with your favorite side dish."/>
      <RecipeCard title="Masala Dosa" description="Crispy dosa filled with flavorful potato masala" image={masaladosa} recipe="Crispy South Indian dosa filled with spiced potato masala, served with sambar and coconut chutney."/>
      <RecipeCard title="Idli" description="Soft and fluffy South Indian steamed rice cakes" image={idli} recipe="Soft steamed rice cakes made from fermented rice and urad dal batter, usually served with sambar and coconut chutney."/>
      <RecipeCard title="Ven Pongal" description="Soft and comforting South Indian rice and lentil dish" image={pongal} recipe="A comforting dish made with rice, moong dal, ghee, black pepper, cumin, and cashews. Serve hot with coconut chutney or sambar."/>
      <RecipeCard title="Bisibele Bath" description="A flavorful South Indian rice and lentil dish" image={bisibeleBhath} recipe="A wholesome dish made with rice, lentils, vegetables, tamarind, and aromatic spices. Serve hot with a little ghee."/>
      <RecipeCard title="Lemon Rice" description="Tangy and flavorful South Indian rice" image={lemonRice} recipe="Rice tossed with lemon juice, mustard seeds, curry leaves, green chilies, peanuts, and turmeric. A simple and flavorful meal."/>
      <RecipeCard title="Puliyogare" description="Tangy and spicy South Indian tamarind rice" image={puliyogre} recipe="Rice mixed with tamarind paste, roasted spices, peanuts, curry leaves, and a flavorful tempering. A popular South Indian dish."/>
      <RecipeCard title="Uttapam" description="Soft and savory South Indian vegetable pancake" image={uttapam} recipe="A thick, soft pancake made from fermented rice and urad dal batter, topped with onions, tomatoes, green chilies, and other vegetables."/>
      <RecipeCard title="Sambar" description="Flavorful South Indian lentil and vegetable stew" image={sambar} recipe="A flavorful dish made with lentils, vegetables, tamarind, and aromatic spices. It is commonly served with idli, dosa, or rice."/>
      <RecipeCard title="Rasam" description="Light, spicy and tangy South Indian soup" image={rasam} recipe="A flavorful South Indian soup made with tamarind, tomatoes, rasam spices, pepper, cumin, and herbs. Serve hot with rice."/>
      <RecipeCard title="Akki Roti" description="Crispy and flavorful South Indian rice flour flatbread" image={akkiRotti} recipe="A traditional Karnataka flatbread made with rice flour, onions, green chilies, grated vegetables, and spices. Serve hot with chutney or curry."/>

    </div>
     )}
     {aboutVisible && (
    <AboutContact />
)}
   <Footer/>

    </div>
  );
}
export default App;