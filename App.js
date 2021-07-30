
import React from 'react';
import { SafeAreaView, StatusBar, TouchableOpacity, useColorScheme, Text } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';





// COMPONENTS
import BottomSheet from "./src/components/bottom-sheet";
import CalendarLayer from "./src/components/calendar-layer";

// REDUX 
import {Provider} from 'react-redux';
import store from "./src/redux/store/configureStore";



const App = () => {

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#EEE' : '#FFF',
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <CalendarLayer />
        <BottomSheet />

      </SafeAreaView>
    </Provider>
  );
};


export default App;


// Необходимо создать мобильное приложение с отображением погоды в одной локации на несколько дней (14).
// Город выбираете на свое усмотрение. Использовать для получения информации о погоде API:
// https://bit.ly/3hJ1TAn (регистрация бесплатная). Вывести данную информацию о погоде в виде календаря 
// (обычный календарь, при нажатии на выбранную дату отображать информацию о погоде на день).  

// Также требуется отобразить данные о погоде на 2 будущие недели и вывести эту информацию в виде одного списка 
// (section list (primary condition), title - first week\second week, 
// data - days of the week+information about weather of each day)

// Additional req:

// RN CLI (if you don’t have a MAC make only Android ver.)
// Use React Navigation 5 ver.
// Use REDUX (Saga for all APIs requests)
// Use Hooks

// To be a plus: 

// Use customize Fonts
// Animate slider and section list 
// Use SVG images (https://bit.ly/36DsSXJ)
// Use bottom-sheet for section list


//  import React, { Component } from 'react';
//  import {
//    StyleSheet,
//    View,
//    Button,
//    Text
//  } from 'react-native';
//  import { connect } from 'react-redux';
//  import { changeCount } from './src/redux/actions/counts';
//  import { bindActionCreators } from 'redux';
 
 
//  class App extends Component {
//    decrementCount() {
//      let { count, actions } = this.props;
//      count--;
//      actions.changeCount(count);
//    }
//    incrementCount() {
//      let { count, actions } = this.props;
//      count++;
//      actions.changeCount(count);
//    }
//    render() {
//      const { count } = this.props;
//      return (
//        <View styles={styles.container}>
//          <Button
//            title="increment"
//            onPress={() => this.incrementCount()}
//          />
//          {/* <Text>{count}</Text> */}
//          <Button
//            title="decrement"
//            onPress={() => this.decrementCount()}
//          />
//        </View>
//      );
//    }
//  };
 
//  const styles = StyleSheet.create({
//    container: {
//      flex: 1,
//      justifyContent: 'center',
//      alignItems: 'center'
//    }
//  });
 
//  const mapStateToProps = state => ({
//    count: state.count,
//  });
 
//  const ActionCreators = Object.assign(
//    {},
//    changeCount,
//  );
//  const mapDispatchToProps = dispatch => ({
//    actions: bindActionCreators(ActionCreators, dispatch),
//  });
 
//  export default connect(mapStateToProps, mapDispatchToProps)(App)