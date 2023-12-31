import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, Text} from 'react-native';

import Ball from './components/ball/ball';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Ball></Ball>
    </SafeAreaView>
  );
}

export default App;
