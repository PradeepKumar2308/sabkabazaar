import styles from '../../styles/homeStyle';
import React from 'react';
import {View, Image, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import Carousel from './Carousel';
import Category from './Category';
import {store} from '../../redux/store/stores';
import HeaderComponent from './Header';

interface Props {
  navigation: any;
}

interface State {
  isVisible: boolean;
}

class Home extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }

  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false,
    });
  };

  async componentDidMount() {
    var t = this;
    setTimeout(function () {
      t.Hide_Splash_Screen();
    }, 5000);
  }

  render() {
    let Splash_Screen = (
      <View style={styles.container}>
        <Image
          source={require('../../static/images/logo.png')}
          style={styles.splashImage}
        />
      </View>
    );
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        {this.state.isVisible === true ? (
          Splash_Screen
        ) : (
          <View style={{flex: 1}}>
            <Provider store={store}>
              <ScrollView style={{backgroundColor: 'white'}}>
                <View style={{flex: 0.1}}>
                  <HeaderComponent />
                </View>
                <View style={{flex: 0.2}}>
                  <Carousel />
                </View>
                <View style={{flex: 0.7}}>
                  <Category navigation={this.props.navigation} />
                </View>
              </ScrollView>
            </Provider>
          </View>
        )}
      </View>
    );
  }
}

export default Home;
