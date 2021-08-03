import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

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
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {this.props.increaseCounter2()}}>
                    <View style={styles.btn}>
                        <Text>Increase</Text>
                    </View>
                </TouchableOpacity>

                <Text style={styles.counterText}>{counter}</Text>

                <TouchableOpacity onPress={() => {this.props.decreaseCounter2()}}>
                    <View style={styles.btn}>
                        <Text>Decrease</Text>
                    </View>
                </TouchableOpacity>
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
  

const styles = StyleSheet.create({
    container: {
        margin: 20,
        flexDirection: 'row',
    },
        
    btn: {
        alignItems: 'center', 
        margin: 10,
        padding: 8,
        borderRadius: 16, 
        borderWidth: 0.5,
        backgroundColor: '#FFF',
    },

    counterText: {
        alignItems: 'center',
        borderWidth: 0.5,
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
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(BottomSheet);
  