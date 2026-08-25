function Hero(props){
    function handleExplore(){
        props.setRecipesVisible(true);
        props.setAboutVisible(false);
        props.setHomeVisible(false);
    }

    return(

        <div>

            <section className="hero">

                <h2 className="hero-title">Welcome to Kitchen Blog</h2>

                <p>Discover Delicious Homemade Recipes from around the world</p>

                <button onClick={handleExplore} className="hero-button">
                    Explore Recipes
                </button>

            </section>

            <section className="intro-section">

                <h2>What You'll Find Here</h2>

                <div className="intro-items">

                    <div>
                        <h3>🍳 Easy Recipes</h3>
                        <p>Simple recipes that are easy to prepare at home.</p>
                    </div>

                    <div>
                        <h3>🥗 Healthy Ideas</h3>
                        <p>Delicious ideas for everyday meals.</p>
                    </div>

                    <div>
                        <h3>❤️ Homemade Food</h3>
                        <p>Enjoy tasty homemade food with your family.</p>
                    </div>

                </div>

            </section>

        </div>

    );
}

export default Hero;