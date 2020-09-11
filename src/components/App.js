import React,{useEffect,useState} from "react"
import Recipe from "./Recipe"

const App = () => {

    const APP_ID='e5fd7f7c';
    const APP_KEY='a21b4c4b71b9a68d9cc2855427cf179a';

    const [recipes,setRecipes] = useState([]);
    const [search,setSearch] = useState("");
    const [query,setQuery] =useState('strawberry')

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await  response.json();
        setRecipes(data.hits);
        console.log(data.hits)
    };
    
    const updateSearch = (event) => {
        setSearch(event.target.value)
    }

    const getSearch = event => {
        event.preventDefault()
        setQuery(search)
        setSearch("")
    }

    useEffect(() => {getRecipes()}, [query])

    return(
    <div className="main-content">
       <form onSubmit={getSearch} className="search-form">
           <input type="text" className="search-bar" value={search} placeholder="Go on search...apple/fish/cashew/even kaddu are all valid" onChange={updateSearch}></input>
           <button type="submit" className="search-button">Search</button>
       </form>
       <div className="recipes-display">
       {recipes.map(individualRecipe => (
           <Recipe key={individualRecipe.recipe.label}
               title={individualRecipe.recipe.label}
               calories={individualRecipe.recipe.calories}
               image={individualRecipe.recipe.image}
               ingredients={individualRecipe.recipe.ingredients} />
       ))}
       </div>
    </div>     
    )
}

export default App