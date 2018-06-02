import 'roboto-fontface/css/roboto/roboto-fontface.css';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import './index.css';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

import App from './App';


const store = configureStore();

// TODO: Added random theme, needs cool theme
const theme = {
  darkPrimaryColor: '#512DA8',
  defaultPrimaryColor: '#673AB7',
  lightPrimaryColor: '#D1C4E9',
  textPrimaryColor: '#FFFFFF',
  accentColor: '#FFC107',
  primaryTextColor: '#212121',
  secondaryTextColor: '#757575',
  dividerColor: '#BDBDBD',
  error: '#F44336',
};

render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
