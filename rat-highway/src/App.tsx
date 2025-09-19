import React from 'react';
import './App.css';
import Home from './pages/Home';
import FaultyTerminal from './components/FaultyTerminal';

function App() {
  return (
    <div className="App">
      {/* FaultyTerminal as full-page background */}
      <div style={{ 
        width: '100vw', 
        height: '100vh', 
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1 // Put it behind content
      }}>
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={1}
          pause={false}
          scanlineIntensity={1}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.7}
          tint="#39bb06"
          mouseReact={true}
          mouseStrength={0.5}
          pageLoadAnimation={false}
          brightness={1}
        />
      </div>
      
      {/* main content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Home />
      </div>
    </div>
  );
}

export default App;
