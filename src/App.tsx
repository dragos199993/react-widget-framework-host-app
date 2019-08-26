import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {

  useEffect(() => {
    const WidgetInstance = (window as any).ReactWidget.default;
    WidgetInstance.new({ selector: '.react-widget-container' }).render();
  },[]);
  window.addEventListener('init', (res) => console.log("INITIALIZED", res));
  window.addEventListener('clickWidget', (res) => console.log("CLICKED WIDGET", res));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="react-widget-container"></div>
    </div>
  );
}

export default App;
