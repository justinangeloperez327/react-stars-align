import './index.css';

import App from './App';
import { ParticlesProvider } from '@tsparticles/react';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router';
import { loadSlim } from '@tsparticles/slim';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';

const initParticles = async (engine) => {
  await loadSlim(engine);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParticlesProvider init={initParticles}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ParticlesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
