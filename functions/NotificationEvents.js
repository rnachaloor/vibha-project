import React, {Component} from 'react';
import {Notifications} from 'react-native-notifications';

export class NotificationEvents extends Component {
  constructor(props) {
    super(props);
    Notifications.registerRemoteNotifications();

    Notifications.events().registerRemoteNotificationsRegistered(
      (event: Registered) => {
        console.log('Device Token Received', event.deviceToken);
      },
    );

    Notifications.events().registerNotificationReceivedForeground(
      (notification: Notification, completion) => {
        console.log(
          `Notification received in foreground: ${notification.title} : ${notification.body}`,
        );
        completion({alert: true, sound: true, badge: true});
      },
    );

    Notifications.events().registerNotificationOpened(
      (notification: Notification, completion) => {
        console.log(`Notification opened: ${notification.payload}`);
        completion();
      },
    );

    Notifications.events().registerRemoteNotificationsRegistrationFailed(
      (event: RegistrationError) => {
        console.error(event);
      },
    );

    Notifications.events().registerNotificationReceivedBackground(
      (
        notification: Notification,
        completion: (response: NotificationCompletion) => void,
      ) => {
        console.log('Notification Received - Background', notification.payload);

        // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.
        completion({alert: true, sound: true, badge: true});
      },
    );

    Notifications.setNotificationChannel({
      channelId: 'Channel',
      name: 'Channel',
      importance: 5,
      description: 'the_channel',
      enableLights: true,
      enableVibration: true,
      // groupId: 'your-group',
      showBadge: true,
      vibrationPattern: [200, 1000, 500, 1000, 500],
    });
  }
}
