const setListening = value => {
    return {
     type: value ? 'START_LISTENING' : 'STOP_LISTENING'
    }
   }

export { setListening }