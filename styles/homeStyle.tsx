import {StyleSheet, Dimensions} from 'react-native';
let window = {
  Devwidth: Dimensions.get('window').width,
  Devheight: Dimensions.get('window').height,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  homeCartButton: {
    width: 100,
    height: '100%',
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    marginTop: 30,
    height: 225,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.7,
    elevation: 1,
  },
  leftSubContainer: {
    flexDirection: 'row',
  },
  rightSubContainer: {
    flexDirection: 'row-reverse',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  desc: {
    padding: 15,
    fontSize: 15,
    textAlign: 'center',
  },
  img: {
    width: 110,
    height: 75,
    margin: 5,
  },
  btn: {
    backgroundColor: '#cc0066',
    padding: 1,
    width: 190,
    height: 50,
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  btnText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
  },
  imgContainer: {
    flex: 0.35,
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 0.65,
    justifyContent: 'center',
  },
  splashImage: {
    width: '65%',
    height: '50%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 150,
  },
  error: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: window.Devheight,
  },
  carouselImage: {
    width: window.Devwidth,
    height: 150,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  headerContainer: {
    flex: 1, 
    flexDirection: 'row',
     justifyContent: 'space-between'
  },
  logo: {
    width: 100,
    height: 50,
    margin: 10
  },
});

export default styles;
