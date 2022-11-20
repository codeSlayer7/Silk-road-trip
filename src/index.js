import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from './redux/store';
import { BrowserRouter } from "react-router-dom";
import Spinner from './components/Spinner';
import '../src/styles/styles.scss'
const App = React.lazy(() => import('./App'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>

);


