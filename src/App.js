import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ImageGenerator from './components/ImageGenerator';
import ChatComponent from './components/ChatComponent';

function App() {
  const [activeTab, setActiveTab] = useState('chat');

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="App">
      <button className={activeTab === 'chat' ? 'active' : ''} onClick={() => handleTabChange('chat')}>Chat</button>
      <button className={activeTab === 'chat' ? 'recipe-generator' : ''} onClick={() => handleTabChange('recipe-generator')}>Recipe Generator</button>
      <button className={activeTab === 'chat' ? 'image-generator' : ''} onClick={() => handleTabChange('image-generator')}>Image Generator</button>

      <div>
        {activeTab === 'chat' && <ChatComponent />}
        {activeTab === 'image-generator' && <h2>Recipe enerator</h2>}
        {activeTab === 'recipe-generator' && <ImageGenerator />}
      </div> 
    </div>
  );
}

export default App;
