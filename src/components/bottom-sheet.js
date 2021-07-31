import React, { Component } from "react";
import { Text, TouchableOpacity, View } from 'react-native';

import {connect} from 'react-redux';

class BottomSheet extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
        }
    }

    
    render() {

        const { counter } = this.props

        return(
            <View style={{ margin: 20}}>
                <TouchableOpacity onPress={() => {
                    this.props.increaseCounter();
                }}>
                    <Text>Make True</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    this.props.decreaseCounter();
                }}>
                    <Text>Make False</Text>
                </TouchableOpacity>
                <Text>{counter}</Text>
            </View>
           
        )
    }
}

function mapStateToProps(state) {
    return {
      counter: state.counter,
    };
  }
  
function mapDispatchToProps(dispatch) {
    return {
      increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
      decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(BottomSheet);
  