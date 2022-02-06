import React from 'react';
import {RecoilRoot} from 'recoil';
import AuthApp from './components/AuthApp';

export default function App() {
  return (
    <RecoilRoot>
      <AuthApp />
    </RecoilRoot>
  );
}
