import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Infoslider from 'react-native-infoslider'

class Imgslider extends Component {
constructor(props) {
    super(props);

    this.state = {
        data: [
            {
                image: require('../resource/span.png')
            },
            {
                image: require('../resource/img2.jpg')
            },
            {
                image: require('../resource/img3.jpg')
            }
        ]
    };
}
render() {
    return (
        <Infoslider
            data={this.state.data}
            
            
            loop={true}
            autoplay={true}
            autoplayTimeout={3} />
    );
}
}

export default Imgslider;



