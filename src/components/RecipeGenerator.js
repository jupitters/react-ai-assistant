import React, { useState } from 'react'

const RecipeGenerator = () => {
  const [ingredients, setIngredients] = useState('')
  const [cuisine, setCuisine] = useState('')
  const [dietaryRestrictions, setDietaryRestrictions] = useState('')
  const [recipe, setRecipe] = useState('')

  return (
    <div>
      <h2>Recipe Generator</h2>
      <input type='text' value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder='Enter ingredients(comma separated)' />
      <input type='text' value={cuisine} onChange={(e) => setCuisine(e.target.value)} placeholder='Enter cuisine' />
      <input type='text' value={dietaryRestrictions} onChange={(e) => setDietaryRestrictions} placeholder='Enter dietary restrictions' />
    </div>
  )
}

export default RecipeGenerator