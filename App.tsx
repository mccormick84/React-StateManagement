import React from 'react';
import {RecoilRoot} from 'recoil';
import PostsApp from './components/PostsApp';

export default function App() {
  return (
    <RecoilRoot>
      <PostsApp />
    </RecoilRoot>
  );
}
