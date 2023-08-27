import React from 'react';
import {render} from '@testing-library/react-native';
import Ball from '../ball';

describe('Ball', () => {
  it('render component', () => {
    const {debug} = render(<Ball />);
    debug();
  });
});
