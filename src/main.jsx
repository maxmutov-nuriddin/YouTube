import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { AppContextProvider } from './context/Context.jsx';
import { DataProvider } from './context/Data.jsx';
import { BrowserRouter } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContextProvider>
    <DataProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </DataProvider>
  </AppContextProvider>
)
