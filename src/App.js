import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import Recipebig from "./Recipebig";
import Loader from "./Loader";
import "./App.css";

export default function App() {
  const APP_ID = "02ed5e12";
  const APP_KEY = "301f8c58ac9ffd6ee4906f68d1b010c9";

  let lastId = 0;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("banana");
  const [stylos, setStylos] = useState(false);
  const [loading, setLoading] = useState(true);
  const [windowSize, setWindowSize] = useState({});
  const REQ = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    setWindowSize(window.matchMedia("(max-width: 800px)"));
  }, []);

  useEffect(() => {
    getRecipes();
  }, [query]);
  var i = 0;
  const newId = (prefix = "id") => {
    if (i == 0) {
      lastId++;
      i++;
    } else {
      i--;
    }
    return lastId;
  };

  const getRecipes = async () => {
    const res = await fetch(REQ);
    const data = await res.json();
    const work = data.hits;
    const final = work.forEach(
      (element) =>
        (element.recipe.calories = Math.round(element.recipe.calories))
    );
    console.log(data.hits);
    if (data.hits[0]) {
      if (data.hits[0].recipe.label) {
        setStylos(false);
      }
    } else {
      setStylos(true);
    }
    setRecipes(data.hits);
    setLoading(false);
  };
  const final = recipes.map((recipe) => (
    <Recipe
      key={newId()}
      infoKey={newId()}
      title={recipe.recipe.label}
      calories={recipe.recipe.calories}
      image={recipe.recipe.image}
    />
  ));

  const notFinal = recipes.map((recipe) => (
    <Recipebig
      key={newId()}
      infoKey={newId()}
      title={recipe.recipe.label}
      calories={recipe.recipe.calories}
      image={recipe.recipe.image}
    />
  ));

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setLoading(true);
    setSearch("");
  };

  return (
    <div className="App">
      <header className="header">
        <h1 className="recipeX">RecipeX</h1>
      </header>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={onChange}
        />
        <button className="search-button" type="submit">
          Go!
        </button>
      </form>
      <Loader
        style={loading ? { opacity: 1 } : { opacity: 0 }}
        loading={loading}
      />
      <div className="container">{windowSize.matches ? final : notFinal}</div>
      <h1 style={stylos ? { opacity: 1 } : { opacity: 0 }} className="err">
        Sorry, your search query did not match any result in our API!
      </h1>
    </div>
  );
}
