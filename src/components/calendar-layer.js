
import React, {useState, useEffect} from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import axios from "axios";

import { CalendarList } from 'react-native-calendars';
// import CustomIcon from './CustomIcon'
import Icon from 'react-native-vector-icons/Fontisto';


const CalendarLayer = () => {

  const toCelsius = (kelvins) => kelvins - 273.15 // °C 

  const [weatherInfo, setWeatherInfo] = useState('')
  const [iconSelector, setIconSelector] = useState('')

  const [data, setData] = useState([])

  const isDarkMode = useColorScheme() === 'dark';
  
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

        setIconSelector(key)
        setWeatherInfo(winfo)

      }
    })
  }

  return (
    <ScrollView>
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

      </View>
    </ScrollView>
  )
}

export default CalendarLayer