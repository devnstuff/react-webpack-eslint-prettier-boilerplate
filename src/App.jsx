import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper, Test } from './components';

import './assets/style/index.scss';

const App = () => (
  <Wrapper>
    <Test />
  </Wrapper>
);

ReactDOM.render(<App />, document.querySelector('#app'));
