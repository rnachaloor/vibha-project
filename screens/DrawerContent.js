import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';

export function DrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Profile')}>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <Avatar.Image
                  source={{
                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
                  }}
                  size={50}
                />
                <View style={{flexDirection: 'column', marginLeft: 15}}>
                  <Title style={styles.title}>Name</Title>
                  <Caption style={styles.caption}>username</Caption>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={(styles.paragraph, styles.caption)}>
                  stat
                </Paragraph>
                <Caption style={styles.caption}>info</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={(styles.paragraph, styles.caption)}>
                  stat
                </Paragraph>
                <Caption style={styles.caption}>info</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="list-outline" color={color} size={size} />
              )}
              label="Tutor List"
              onPress={() => {
                props.navigation.navigate('Tutor List');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="calendar-outline" color={color} size={size} />
              )}
              label="Calendar"
              onPress={() => {
                props.navigation.navigate('Calendar');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="analytics-outline" color={color} size={size} />
              )}
              label="Records"
              onPress={() => {
                props.navigation.navigate('Records');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="stats-chart-outline" color={color} size={size} />
              )}
              label="Feedback"
              onPress={() => {
                props.navigation.navigate('Feedback');
              }}
            />
          </Drawer.Section>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="information-circle-outline"
                  color={color}
                  size={size}
                />
              )}
              label="About"
              onPress={() => {
                props.navigation.navigate('About');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="people-outline" color={color} size={size} />
              )}
              label="Contact"
              onPress={() => {
                props.navigation.navigate('Contact');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="business-outline" color={color} size={size} />
              )}
              label="Sponsors"
              onPress={() => {
                props.navigation.navigate('Sponsors');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="log-out-outline" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  drawerSection: {
    marginTop: 15,
  },
});
