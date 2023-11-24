import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
    // BrowserRouter will controll the routing for the entire application
    // used to import { Routes, Route } from 'react-router-dom' in App.tsx allowing everything to be wrapped in a <main> section in <App>
    <BrowserRouter>
        <App />
    </BrowserRouter>
)