import React, { useState } from 'react'

const ChatComponent = () => {
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')

  const handleAskAi = async (prompt) => {
    
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