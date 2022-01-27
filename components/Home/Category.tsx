import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchData} from '../../redux/action/action';
import styles from '../../styles/homeStyle';

const Category = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const dataList = useSelector(state => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData('home', 'http://10.0.2.2:3000/categories'));
    setIsLoading(true);
  }, []);

  return (
    <View>
      {isLoading ? (
        <View>
          <FlatList
            data={dataList}
            renderItem={({item, index}) => {
              return (
                <View
                  style={[
                    styles.subContainer,
                    index % 2 === 0
                      ? styles.leftSubContainer
                      : styles.rightSubContainer,
                  ]}>
                  <View style={styles.bodyContainer}>
                    <Text style={styles.heading}>{item.name}</Text>
                    <Text style={styles.desc}>{item.description}</Text>
                    <TouchableOpacity
                      style={styles.btn}
                      onPress={() => {
                        navigation.navigate('Product', {
                          itemId: Math.random(),
                          otherParams: item.id,
                        });
                      }}>
                      <Text style={styles.btnText}>Explore {item.key}</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.imgContainer}>
                    <Image
                      source={{
                        uri: `https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master${item.imageUrl}`,
                      }}
                      style={styles.img}
                    />
                  </View>
                </View>
              );
            }}
          />
        </View>
      ) : (
        <View style={styles.error}>
          <ActivityIndicator size="large" color="#cc0066" />
        </View>
      )}
    </View>
  );
};

export default Category;
