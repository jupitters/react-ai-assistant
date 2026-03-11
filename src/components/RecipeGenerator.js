import React, { useState } from 'react'

const RecipeGenerator = () => {
  const [ingredients, setIngredients] = useState('')
  const [cuisine, setCuisine] = useState('')
  const [dietaryRestrictions, setDietaryRestrictions] = useState('')
  const [recipe, setRecipe] = useState()

  return (
    <div>RecipeGenerator</div>
  )
}

export default RecipeGenerator