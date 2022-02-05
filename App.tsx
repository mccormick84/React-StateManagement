import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './slices';
import TodoApp from './components/TodoApp';

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}
