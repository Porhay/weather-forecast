
import React, {useState, useEffect} from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import axios from "axios";

import { Calendar } from 'react-native-calendars';
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

      const newCurrentDate = new Date(day.timestamp + 36000000).toLocaleDateString()

      const newAPIDate = new Date(element.dt * 1000).toLocaleDateString()

      if(newCurrentDate === newAPIDate){
        
        // show weather info for current day you tap in calendar  '  deg: ' + ' °C  ' 
        const mornDeg = toCelsius(element.temp.morn).toFixed(2)
        const dayDeg = toCelsius(element.temp.day).toFixed(2)
        const eveDeg = toCelsius(element.temp.eve).toFixed(2)

        const winfo = newAPIDate + '  ' + element.weather[0].description + '\n' + 
        'morn: ' + mornDeg + '  ' + 'day: ' + dayDeg + '  ' + 'eve: ' + eveDeg 


        const key = element.weather[0].icon // 10d, 01d ...

        setIconSelector(key)
        setWeatherInfo(winfo)

      }
    })
  }

  return (
    <ScrollView>
      <View style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white }}>
        <View style={styles.calendarWrapper}>
          <View style={{ margin: 6 }}>
            <Calendar
                horizontal={true}
                pagingEnabled={true}
                onDayPress={(day) => dailyForecastData(day)}
                pastScrollRange={30}
                futureScrollRange={30}
                pagingEnabled={true}              
            />
          </View>
        </View>
        
        
          
        <View style={styles.showWeatherContainer}>
          {iconSelector === '10d' ? <Icon name="day-rain" size={50} color="#000" /> : null}
          {iconSelector === '01d' ? <Icon name="day-sunny" size={50} color="#000" /> : null}
          {iconSelector === '04d' ? <Icon name="cloudy" size={50} color="#000" /> : null}
          {iconSelector === '03d' ? <Icon name="day-cloudy" size={50} color="#000" /> : null}
          {iconSelector === '02d' ? <Icon name="day-cloudy" size={50} color="#000" /> : null}

          <Text style={styles.showWeatherText}>{weatherInfo}</Text>
        </View>

      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  calendarWrapper: {
    borderRadius: 20, 
    margin: 10, 
    backgroundColor: 'white',
    shadowColor: 'black', 
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3
  },

  showWeatherContainer: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    margin: 10,
    padding: 8,
    borderRadius: 16, 
    backgroundColor: '#FFF',

    // shadow
    shadowColor: 'black', 
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3
  },

  showWeatherText: {
    marginLeft: 20, 
    fontSize: 17, 
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center',
  },

})


export default CalendarLayer