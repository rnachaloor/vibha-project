import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import PushNotification from 'react-native-push-notification';
const RemotePushController = () => {
  PushNotification.configure({
    onRegister: function (token) {
      console.log('TOKEN:', token);
    },
    onNotification: function (notification) {
      console.log('REMOTE NOTIFICATION:', notification);
      // notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: Platform.OS === 'ios',
  });
  PushNotification.createChannel(
    {
      channelId: 'fcm_fallback_notification_channel', // (required)
      channelName: 'Channel', // (required)
    },
    created => console.log(`createChannel returned: ${created}`),
  );

  Platform.buildAndroidNotification = (
    id,
    title,
    message,
    data = {},
    options = {},
  ) => {
    return {
      id: id,
      autoCancel: true,
      largeIcon: options.largeIcon || 'ic_launcher',
      smallIcon: options.smallIcon || 'ic_launcher',
      bigText: message || '',
      subText: title || '',
      vibration: options.vibration || 300,
      vibrate: options.vibrate || true,
      priority: options.priority || 'high',
      importance: options.importance || 'high',
      data: data,
    };
  };
  /*buildIOSNotification = (
    id: number,
    title: string,
    message: string,
    data = {},
    options = {},
  ) => {
    return {
      alertAction: options.alertAction || 'view',
      category: options.category || '',
      userInfo: {
        id: id,
        item: data,
      },
    };
  };*/
  Platform.cancelAllNotification = () => {
    console.log('cancel');
    PushNotification.cancelAllLocalNotifications();
    // if (Platform.OS === 'ios') {
    //  PushNotificationIOS.removeAllDeliveredNotifications();
    //  }
  };

  Platform.showNotification = (
    id,
    title,
    message,
    data = {},
    options = {},
    date,
  ) => {
    PushNotification.localNotificationSchedule({
      //Android
      ...this.buildAndroidNotification(id, title, message, data, options),

      // iOS
      //  ...this.buildIOSNotification(id, title, message, data, options),

      // Android and iOS
      title: title || '',
      message: message || '',
      playSound: options.playSound || true,
      soundName: options.soundName || 'default',
      date: date,
    });
  };
  Platform.unregister = () => {
    PushNotification.unregister();
  };
  return null;
};
export default RemotePushController;
