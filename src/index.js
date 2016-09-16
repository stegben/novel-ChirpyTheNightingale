import React from 'react';
import { render } from 'react-dom';

import Title from './components/Title';

const App = () => (
  <Title />
);

render(<App />, document.getElementById('root'));
