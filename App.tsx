import React from 'react';
import {RecoilRoot} from 'recoil';
import TodoApp from './components/TodoApp';

export default function App() {
  return (
    <RecoilRoot>
      <TodoApp />
    </RecoilRoot>
  );
}
