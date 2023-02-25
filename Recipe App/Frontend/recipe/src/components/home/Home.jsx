import React, { useEffect, useState } from 'react'
import "../home/Home.css"
const Home = () => {
    const [recipeData, setRecipeData] = useState([])

    const fetchData = async () => {
        const res = await fetch("http://localhost:8000/recipe/recipes", {
            method: "Get"
        })
        const products = await res.json();
        setRecipeData(products.result)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleOnClick = (id) =>{
        console.log(`its clicked and id id - ${id}`);
    }

    return (
        <div className='homeContainer'>
            <div className='logoPart'>
                <div className='recipe-logo'>
                    <img src={require("../images/logo.jpg")} alt="logo" />
                </div>
                <div className='app-name'>Recipe App</div>
            </div>

            <div className='searchBar'>
                <input type="text" />
                <span><button className='search-btn'>search</button></span>
            </div>

            <div className='btn'>
                <button className='newRecipe-btn'>
                    <img src={require("../images/th.jpg")} alt="new" />
                    <div className='new'>New</div>
                </button>
            </div>

            <div className='recipe-items'>
                {recipeData.map((ele, index) => {
                    return (
                        <section key={ele._id} className='item-btn'>
                            <button onClick={()=>{handleOnClick(ele._id)}}>
                               <img src={ele.image} id="recipe-image" alt="food" />
                            </button>
                            <div className='recipe-name'>{ele.title}</div>
                        </section>
                    )
                })}
            </div>
        </div>
    )
}

export default Home