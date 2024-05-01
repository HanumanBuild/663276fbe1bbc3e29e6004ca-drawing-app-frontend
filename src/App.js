import React, { useRef, useState } from 'react';
import { Canvas } from './components/Canvas';
import { SaveButton } from './components/SaveButton';
import './App.css';

function App() {
  const [drawings, setDrawings] = useState([]);
  const canvasRef = useRef(null);

  return (
    <div className="App">
      <Canvas ref={canvasRef} />
      <SaveButton canvasRef={canvasRef} setDrawings={setDrawings} />
    </div>
  );
}

export default App;