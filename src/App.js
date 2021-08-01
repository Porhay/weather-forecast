
import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

// COMPONENTS
import BottomSheet from "./components/bottom-sheet";
import CalendarLayer from "./components/calendar-layer";


const App = () => {

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#EEE' : '#FFF',
  };

  return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <CalendarLayer />
        <BottomSheet />

      </SafeAreaView>
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
