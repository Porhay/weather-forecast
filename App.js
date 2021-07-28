
import React, {useState, useEffect} from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import axios from "axios";

import { CalendarList } from 'react-native-calendars';
// import CustomIcon from './CustomIcon'
import Icon from 'react-native-vector-icons/Fontisto';


import { setListening } from "./redux/actions";


import BottomSheet from "./src/components/bottom-sheet";

import {  } from "react-redux";


const App = () => {

  

  const toCelsius = (kelvins) => kelvins - 273.15 // °C 

  const [weatherInfo, setWeatherInfo] = useState('')
  const [iconSelector, setIconSelector] = useState('')

  const [data, setData] = useState([])

  

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  
  const getDataFromAPI = () => {
    const options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/forecast/daily',
      params: {
        q: 'Kyiv,ua',
        lat: '50',
        lon: '31',
        cnt: '14',
        units: 'metric or imperial'
      },
      headers: {
        'x-rapidapi-key': 'ae5947fa48msha5c686a990c2820p1c9c11jsna144715fe038',
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
      }
    }
    return axios.request(options)
  }

  useEffect(() => {
    getDataFromAPI().then((response) => {
      setData(response.data.list)
    }).catch(function (error) {
      console.error(error);
    })
  }, [])


  const dailyForecastData = (day) => {
    data.forEach(element => {
      const newCurrentDate = new Date(day.timestamp).toLocaleDateString()
      const newAPIDate = new Date(element.dt * 1000).toLocaleDateString()

      if(newCurrentDate === newAPIDate){
        


        // show weather info for current day you tap in calendar
        const winfo = newAPIDate + '  deg: ' + toCelsius(element.temp.day).toFixed(2) + ' °C  ' + element.weather[0].description
        const key = element.weather[0].icon // 10d, 01d ...
        console.log(key);
        setIconSelector(key)
        setWeatherInfo(winfo)

        

      }
    })
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white }}>

          <CalendarList
              horizontal={true}
              pagingEnabled={true}
              onDayPress={(day) => dailyForecastData(day)}
            />
            
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 20}}>
            {iconSelector === '10d' ? <Icon name="day-rain" size={50} color="#000" /> : null}
            {iconSelector === '01d' ? <Icon name="day-sunny" size={50} color="#000" /> : null}
            {iconSelector === '04d' ? <Icon name="cloudy" size={50} color="#000" /> : null}
            {iconSelector === '03d' ? <Icon name="day-cloudy" size={50} color="#000" /> : null}
            {iconSelector === '02d' ? <Icon name="day-cloudy" size={50} color="#000" /> : null}

            <Text style={{marginLeft: 20, fontSize: 17}}>{weatherInfo}</Text>
          </View>

          <BottomSheet />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;


// CURRENT DAY
    // const options = {
    //   method: 'GET',
    //   url: 'https://community-open-weather-map.p.rapidapi.com/weather',
    //   params: {
    //     q: 'Kyiv,ua',
    //     lat: '0',
    //     lon: '0',
    //     id: '2172797',
    //     lang: 'null',
    //     units: '"metric" or "imperial"',
    //     mode: 'xml, html'
    //   },
    //   headers: {
    //     'x-rapidapi-key': 'ae5947fa48msha5c686a990c2820p1c9c11jsna144715fe038',
    //     'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
    //   }
    // }

    // axios.request(options).then((response) => {
      
    //   setDegrees(toCelsius(response.data.main.temp).toFixed(2))
    
    // }).then(
    //   console.log('DAY: ' + day.day + '   DEG: ' + degrees + ' °C')

    // ).catch(function (error) {
    //   console.error(error);
    // })



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