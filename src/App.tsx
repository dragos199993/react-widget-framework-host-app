import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const WidgetInstance = (window as any).ReactWidget.default;

  useEffect(() => {
    WidgetInstance.new({ selector: '.react-widget-container' }).render();
  },[]);
  window.addEventListener('init', (res) => console.log("INITIALIZED", res));
  window.addEventListener('clickWidget', (res) => console.log("CLICKED WIDGET", res));
  window.addEventListener('destroy', (res) => console.log("WIDGET DESTROYED", res));

  // DESTROY WIDGET FROM HERE TO TEST DESTROY WIDGET
  // setTimeout(() => {
  //   WidgetInstance.unmount({ selector: '.react-widget-container' });
  // }, 3000);
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
