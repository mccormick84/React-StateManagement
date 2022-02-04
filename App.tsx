import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './slices';
import AuthApp from './components/AuthApp';

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <AuthApp />
    </Provider>
  );
}
