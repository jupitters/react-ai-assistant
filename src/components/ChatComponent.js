import React, { useState } from 'react'

const ChatComponent = () => {
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')

  const handleAskAi = async (prompt) => {
    try{
      const response = await fetch(`http://localhost:8080/ask-ai?prompt=${prompt}`)
      const data = response.json()
      setResponse(data)
    } catch(e){
      alert(e)
    }
  }

  return (
    <div>
      <h2>Talk to AI</h2>
      <input type='text' value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder='Ask AI anything' />
      <button onClick={handleAskAi}>Ask AI</button>
    </div>
  )
}

export default ChatComponent