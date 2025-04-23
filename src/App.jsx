import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductTab from './PriductTab.jsx'
import LikeButton from './LikeButton.jsx'

function App() {

  return (
      <div>
        <h2>BlockBuster Deals | Shop Now</h2>
        <ProductTab />
        <h2>Like Button</h2>
        <LikeButton />
    </div>
  );
}

export default App
