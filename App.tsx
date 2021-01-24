import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store/appStore';

import MyScreen from './src/screens/my-screen/my.screen';

const App = () => {
  return (
    <Provider store={store}>
      <MyScreen></MyScreen>
    </Provider>
  );
};

export default App;
