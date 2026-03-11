import './App.css';
import { useState } from 'react';
import ImageGenerator from './components/ImageGenerator';
import ChatComponent from './components/ChatComponent';
import RecipeGenerator from './components/RecipeGenerator';

function App() {
  const [activeTab, setActiveTab] = useState('chat');

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="App">
      <button className={activeTab === 'chat' ? 'active' : ''} onClick={() => handleTabChange('chat')}>Ask AI</button>
      <button className={activeTab === 'recipe-generator' ? 'active' : ''} onClick={() => handleTabChange('recipe-generator')}>Recipe Generator</button>
      <button className={activeTab === 'image-generator' ? 'active' : ''} onClick={() => handleTabChange('image-generator')}>Image Generator</button>

      <div>
        {activeTab === 'chat' && <ChatComponent />}
        {activeTab === 'recipe-generator' && <RecipeGenerator />}
        {activeTab === 'image-generator' && <ImageGenerator />}
      </div> 
    </div>
  );
}

export default App;
