import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import store from './store/store';
import ShopNavigator from './navigation/ShopNavigator';

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
};

export default App;
