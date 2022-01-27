import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dropdownContainer: {
    marginTop: 25,
    backgroundColor: '#cc0066',
    flex: 0.075
  },
  productList: {
    flex: 0.925
  },
  mainContainer: {
    flex: 1,
    width: '100%',
  },
  productContainer: {
    marginHorizontal: '2.5%',
    marginTop: '2.5%',
    borderBottomWidth: 0.5,
    // borderStyle: 'dashed',
    borderRadius: 1,
  },
  productHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: '5%',
  },
  productDetails: {
    flex: 1,
    flexDirection: 'row',
  },
  productImage: {
    flex: 1,
    alignItems: 'center',
    margin: 5
  },
  productDescription: {
    flex: 1,
    flexDirection: 'column',
  },
  btnBuyNow: {
    flex: 1,
    marginVertical: '5%',
  },
  loadingScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
