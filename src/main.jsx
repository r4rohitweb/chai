import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/styles.css';
import './styles/brewing.css';
import './styles/serving.css';
import './styles/table.css';
import './styles/house.css';
import './styles/counter.css';
import './styles/kitchen.css';
import './styles/dunk-test.css';
import './styles/closing.css';

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
