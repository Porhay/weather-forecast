import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants'
import { put, takeEvery } from 'redux-saga/effects'

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


function* fetchData (action) {
  try {
    const data = yield getDataFromAPI()
    yield put({ type: FETCHING_DATA_SUCCESS, data })
  } catch (e) {
    yield put({ type: FETCHING_DATA_FAILURE })
  }
}

function* dataSaga () {
  yield takeEvery(FETCHING_DATA, fetchData)
}

export default dataSaga