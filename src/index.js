import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { PersistGate } from 'redux-persist/integration/react'
import './index.css';
import {store, persistor} from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);
