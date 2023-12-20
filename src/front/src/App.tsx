import React from 'react';
import './styles/App.css';
import { displayHomePage } from './pages/HomePage';

function App(): JSX.Element {
  return (
    <div>
      {displayHomePage()}
    </div>
  );
}

export default App;
