import {LogBox} from 'react-native';
LogBox.ignoreAllLogs();

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './Home/Home';
import ProductFetch from './Product/PickerViewFetch';
import StoreLocator from './StoreLocator/StoreLocator';

const Drawer = createDrawerNavigator();

class App extends React.Component {

  render() {
    return (
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen
              name="Product"
              component={ProductFetch}
              initialParams={{itemId: 1}}
            />
            <Drawer.Screen name="Store Locator" component={StoreLocator} />
          </Drawer.Navigator>
        </NavigationContainer>
    );
  }
}

export default App;
