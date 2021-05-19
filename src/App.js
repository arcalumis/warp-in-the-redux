import React, { useState } from 'react';
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes';

export const App = ({ history }) => {

  return (
    <ConnectedRouter history={history}>
      { routes }
    </ConnectedRouter>
  );
}