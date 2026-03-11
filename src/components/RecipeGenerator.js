import React, { useState } from 'react'

const RecipeGenerator = () => {
  const [ingredients, setIngredients] = useState('')
  const [cuisine, setCuisine] = useState('')
  const [dietaryRestrictions, setDietaryRestrictions] = useState('')
  const [recipe, setRecipe] = useState('')

  const handleGenerateRecipe = async (ingredients, cuisine, dietaryRestrictions) => {
    try{
      const response = await fetch(`http://localhost:8080/generate-recipe?ingredients=${ingredients}&cuisine=${cuisine}&dietaryRestrictions=${dietaryRestrictions}`)
      const data = response.text()
      setRecipe(data)
    } catch(e){
      alert(e)
    }
  }

  return (
    <div>
      <h2>Recipe Generator</h2>
      <input type='text' value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder='Enter ingredients(comma separated)' />
      <input type='text' value={cuisine} onChange={(e) => setCuisine(e.target.value)} placeholder='Enter cuisine' />
      <input type='text' value={dietaryRestrictions} onChange={(e) => setDietaryRestrictions} placeholder='Enter dietary restrictions' />
      <button onClick={handleGenerateRecipe}>Generate Recipe</button>
    </div>
  )
}

export default RecipeGenerator