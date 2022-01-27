import styles from '../../styles/homeStyle';
import React, {useEffect} from 'react';
import {View, Image, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchData} from '../../redux/action/action';

const CarouselScreen = () => {
    const dataList = useSelector(state => state.banners);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchData('carousel', 'http://10.0.2.2:3001/banners'));
    }, []);
    
  return (
    <View>
      <FlatList
        data={dataList}
        horizontal
        pagingEnabled
        renderItem={({item}) => {
          return (
            <View>
              <Image
                source={{uri: `https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master${item.bannerImageUrl}`}}
                style={styles.carouselImage}
              />
            </View>
          );
        }}
      />
    </View>
  );
}

export default CarouselScreen;