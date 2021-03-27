import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "./Recipe";
import Alert from "./Alert";
import FadeIn from 'react-fade-in';
//import SearchIcon from '@material-ui/icons/Search';
function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "b5476ac8";
  const APP_KEY = "23c951af93df6a63a2791d1482518af2";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert("No food with such name");
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery("");
      setAlert("");
    } else {
      setAlert("Please fill the form");
    }
  };

  const onChange = e => 
  { 
    e.preventDefault();
    setQuery(e.target.value);};

  const onSubmit = e => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="App">
      <div class="animate four">
      <h1><span>   F   </span><span>   o   </span><span>   o   </span><span>   d   </span> &nbsp;
      <span>   D   </span><span>   E   </span><span className="l">   L   </span><span className="i">I </span><span> G</span><span>   h </span><span> t </span><span>s</span></h1>
      </div>

      <form onSubmit={onSubmit} className="searchBox">
        {alert !== "" && <Alert alert={alert} />}
        <input
        className="searchInput"
          type="text"
          name="query"
          onChange={onChange}
          value={query}
          autoComplete="off"
          placeholder="Search Food"
        />
        <button type="submit" value="Search" className="searchButton" >Search</button>
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map(recipe =><FadeIn transitionDuration="200"><Recipe key={uuidv4()} recipe={recipe} /></FadeIn>)}
      </div>
    </div>
  );
}

export default App;