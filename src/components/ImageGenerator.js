import React, { useState } from 'react'

const ImageGenerator = () => {
    const [prompt, setPrompt] = useState('')
    const [imageUrls, setImageUrls] = useState([])

    

  return (
    <div className="tab-content">
      <h2>Generate Image</h2>
      <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder='Enter prompt for image' />
      <button onClick={} >Generate Image</button>
    </div>
  )
}

export default ImageGenerator