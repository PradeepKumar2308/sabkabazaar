import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useSelector, useDispatch, Provider} from 'react-redux';
import {fetchData} from '../../redux/action/action';
import Plp from './Plp';
import {store} from '../../redux/store/stores';
import styles from '../../styles/productStyle';

const PickerViewFetch = ({categoryChosen, changeCategory}) => {
  const [selectedCategory, setSelectedCategory] = useState(
    categoryChosen,
  );
  const [loading, setLoading] = useState(false);
  const categoryData = useSelector(state => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData('home', 'http://10.0.2.2:3000/categories'));
    setLoading(true);
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={{flex: 1}}>
          <View style={styles.dropdownContainer}>
            <Picker
              selectedValue={selectedCategory}
              style={{height: 50, width: '100%'}}
              onValueChange={ (itemValue) => {
                console.log("hi" + selectedCategory)
                setSelectedCategory(itemValue)
                changeCategory(selectedCategory)
                
                }}>
              {categoryData.map(item => {
                return (
                  <Picker.Item
                    label={item.name}
                    value={item.id}
                    key={item.id}
                  />
                );
              })}
            </Picker>
          </View>
          <View style={styles.productList}>
            <Plp selectedCategory={selectedCategory} />
          </View>
        </View>
      ) : (
        <View style={styles.loadingScreen}>
          <ActivityIndicator size="large" color="red" />
        </View>
      )}
    </View>
  );
};

interface Props{
  route: any;
}
class ProductFetch extends React.Component<Props> {
  state = {
    flag: false,
    value: this.props.route.params.otherParams
  };
  changeCategory = (newCategory) => {
    this.setState({value: newCategory});
  }
  render() {
    return (
      <Provider store={store}>
        <PickerViewFetch
          categoryChosen={this.state.value}
          changeCategory={this.changeCategory}
        />
      </Provider>
    );
  }
}

export default ProductFetch;
