import React from 'react'
import style from './Recipe.module.css'
const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div className={style.tiles}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>Calories:{calories}</p>
            <img className={style.images} src={image} alt=""></img>
        </div>
    )
}

export default Recipe