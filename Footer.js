import React, { Component } from 'react';
import { Text } from 'react-native';

class Footer extends Component {
    render(){
        return (
            <Text style={{fontSize:25}}>
                {this.props.konten}
                {/* {this.props.x}, {this.props.y} */}
            </Text>
        )
    }
}
export default Footer;