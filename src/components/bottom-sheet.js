import React, { Component } from "react";
import { Text, TouchableOpacity, View } from 'react-native';

import {connect} from 'react-redux';
import { increaseCounter, decreaseCounter } from "../redux/actions/counts";

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
                    this.props.increaseCounter2()
                }}>
                    <Text>Make True</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    this.props.decreaseCounter2();
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
      counter: state.countReducer.counter,
    };
  }
  
function mapDispatchToProps(dispatch) {
    return {
      increaseCounter2: () => dispatch(increaseCounter()),
      decreaseCounter2: () => dispatch(decreaseCounter()),
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(BottomSheet);
  