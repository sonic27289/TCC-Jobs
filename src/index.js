import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';
import { SettingsProvider } from './context/SettingsContext';
import { getSettings } from './utils/settings';

const settings = getSettings();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline/>
    <Provider store={store}>
      <SettingsProvider settings={settings}>
        <App />
      </SettingsProvider>
    </Provider>
  </React.StrictMode>
);


