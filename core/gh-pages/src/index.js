import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { AppContainer } from 'react-hot-loader';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>, document.getElementById('app'));


// if (module.hot) {
//   module.hot.accept('./containers/Root', () => {
//     render(
//       <AppContainer
//         component={require('./containers/Root').default}
//         props={{ store }}
//       />,
//       document.getElementById('root')
//     );
//   });
// }