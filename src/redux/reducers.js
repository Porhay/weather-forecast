const initialState = {
    start: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
     case 'START_LISTENING': {
         return{
             ...state, start: true
         }
     }
     case 'STOP_LISTENING': {
         return{
             ...state, start: false
         }
     }
     default: {
      return state
     }
    }
   };