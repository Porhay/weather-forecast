import React, { Component } from "react";
import { Text, TouchableOpacity, View } from 'react-native';

import { setListening } from "../redux/actions";

export default class BottomSheet extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
        }
    }

    startListenerTapped = () => {
        this.props.setListening(true)
    }

    stopListenerTapped = () => {
        this.props.setListening(false)
    }

    render() {

        const { start } = this.props

        return(
            <View>
                <TouchableOpacity onPress={this.startListenerTapped}>
                    <Text>Make True</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.stopListenerTapped}>
                    <Text>Make False</Text>
                </TouchableOpacity>
                {/* <Text>{start}</Text> */}
            </View>
           
        )
    }
}