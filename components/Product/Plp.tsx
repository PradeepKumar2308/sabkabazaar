import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  Dimensions,
  FlatList,
  Image,
  Text,
  View,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../redux/action/action';
import styles from '../../styles/productStyle';

const NUM_OF_LINES = 5;
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 0.4);
const imageWidth = imageHeight;

const Plp = (selectedCategory) => {
  const [loading, setLoading] = useState(false);
  const [categoryId, setCategoryId] = useState(selectedCategory.selectedCategory);
  console.log(categoryId)
  const productList = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData('products', 'http://10.0.2.2:3002/products'));
    setLoading(true);
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.mainContainer}>
          <FlatList
            horizontal={false}
            data={productList}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <View>
              {item.category === categoryId ? (
                    <View style={styles.productContainer}>
                      <View>
                        <Text style={styles.productHeader}>{item.name}</Text>
                      </View>
                      <View style={styles.productDetails}>
                        <View style={styles.productImage}>
                          <Image
                            style={{
                              width: imageWidth,
                              height: imageHeight,
                            }}
                            source={{
                              uri: `https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master${item.imageURL}`,
                            }}
                          />
                        </View>
                        <View style={styles.productDescription}>
                          <View style={{flex: 1}}>
                            <Text
                              numberOfLines={NUM_OF_LINES}
                              ellipsizeMode="clip">
                              {item.description}
                            </Text>
                          </View>
                          <View style={styles.btnBuyNow}>
                            <Button
                              title={`Buy Now @ MRP Rs.${item.price}`}
                              color="#cc0066"
                              onPress={() =>
                                Alert.alert(`Added ${item.name} to Cart`)
                              }
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                   ) : (
                    <View></View>
                  )} 
                </View>
              );
            }}
          />
        </View>
      ) : (
        <View style={styles.loadingScreen}>
          <ActivityIndicator size="large" color="#cc0066" />
        </View>
      )}
    </View>
  );
};

export default Plp;
