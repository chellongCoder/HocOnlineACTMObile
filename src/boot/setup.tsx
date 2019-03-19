import React from 'react'
import { Component } from 'react';
import { Text, View, PushNotificationIOS } from 'react-native'
import App from '../../App';
import { Provider } from "mobx-react/native";
import CounterStore from '../store/couter';
import stores from './configStore';
import PushNotification from 'react-native-push-notification';
export default class Setup extends Component {
  constructor(props) {
    super(props);
    this.configNotification = this.configNotification.bind(this);
  }
  componentDidMount() {
    console.disableYellowBox = true;
    this.configNotification();
  }
  async getUserRoleByIdUser(id : number) {
    let request = `http://localhost:8080/api/ext/get-role?id=5`;
    console.log('request', request);
    const res = await fetch(request);
    const json = await res.json();
    if (json.length !== 0) return json[0];
    throw new Error(json.message);
  }
  configNotification () {
    PushNotification.configure({

      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token : string) {
        console.log('TOKEN:', token);
      },

      // (required) Called when a remote or local notification is opened or received
      onNotification: function (notification : any) {
        console.log('NOTIFICATION:', notification);
        this.getUserRoleByIdUser(5);
        // process the notification

        // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
      senderID: "YOUR GCM (OR FCM) SENDER ID",

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
        * (optional) default: true
        * - Specified if permissions (ios) and token (android and ios) will requested or not,
        * - if not, you must call PushNotificationsHandler.requestPermissions() later
        */
      requestPermissions: true,
    });

  }
    render() {
      return (
      <Provider {...stores()}>
          <App />
      </Provider> 
      )
    }
  }