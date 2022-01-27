import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 20,
  },
  image: {
    width: 20,
    height: 20,
  },
  button: {
    backgroundColor: '#cc0066',
    width: '100%',
    height:70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  directions: {
    color: 'white',
    fontSize: 20
  },
  errortext: {
    fontSize:25,
  },
  locationList: {
    fontSize: 15,
    padding: 10,
    backgroundColor: '#cc0066',
    borderBottomWidth: 0.2,
    marginTop: 20,
    color: 'white'
  }
});
export default styles;
