import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles/styles.scss';

import { store } from './store';
import { Provider } from 'react-redux';

import { Helmet, HelmetProvider } from "react-helmet-async";

const container = document.getElementById('root');
const root = createRoot( container );

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
      <Helmet>
        <title>Alborghetti Store</title>
        <meta property="og:title" content='Alborghetti Store' />

        <meta name="description" content='L’eleganza' />
        <meta property="og:description" content='L’eleganza' />

        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />

        <meta property="og:image" content='./../public/favicon.png' />
      </Helmet>
        <App />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
