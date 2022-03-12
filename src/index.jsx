// Imports de React
import React from 'react';
import ReactDOM from 'react-dom';

// Imports de Redux
import App from './components/App';

// Importamos las hojas de estilos
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    document.getElementById('root'),
);
