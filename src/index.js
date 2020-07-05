import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';

import Load from './components/Loadings/Loading/loading'
const App = lazy(() => import('./App'))

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Load />}>
        <App />
    </Suspense>
  </React.StrictMode >,
  document.getElementById('root')
);
