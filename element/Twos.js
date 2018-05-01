import React, { Component } from 'react';
import { Text, View, AppState } from 'react-native';
import PushController from './Push';
import PushNotification from 'react-native-push-notification';

class Twos extends Component {
    constructor(){
        super();
        this.handleAppstateChange = this.handleAppstateChange.bind(this);
        this.state = {ms:5000};
    }
    componentDidMount(){
        AppState.addEventListener('change', this.handleAppstateChange);
    }
    handleAppstateChange(AppState){
        if (AppState === 'background'){
            PushNotification.localNotificationSchedule({
                title:"new message",
                message: "hello, your app is still running",
                date: new Date(Date.now() + (this.state.ms)),
                color: "red",
                largeIcon: "ic_launcher",
            });
        }
    }
    
    render  (){
        return (
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}} >
                <Text>Twos</Text>
                <PushController />
            </View>
        )
    }
}
export default Twos;