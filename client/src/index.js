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

const theme = {
  background: {
    primary: '#3e464c',
    secondary: '#333',
  },
  text: {
    primary: '#EEE',
    secondary: '#CCC',
  },
  primary: '#21BC6E',
  secondary: '#1E303C',
  active: '#ffb74d',
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
