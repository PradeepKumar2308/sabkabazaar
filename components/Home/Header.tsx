import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../../styles/homeStyle';

function HeaderComponent() {
  return (
    <View
      style={styles.headerContainer}>
      <View>
        <Image
          source={require('../../static/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.homeCartButton}>
          <Image source={require('../../static/images/cart.png')} />
          <Text> 0 Items</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HeaderComponent;
