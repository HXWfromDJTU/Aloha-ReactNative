/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Button, SearchBar, ListView, Calendar, WhiteSpace, WingBlank, Carousel } from 'antd-mobile-rn';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  onselectedIndexChange(index: number) {
    /* tslint:disable: no-console */
    console.log('change to', index);
  }
  render() {
    return (
      <View>
        <SearchBar placeholder="Search" showCancelButton />
        <WhiteSpace size="lg" />
        <WingBlank size="md">
          <View style={{ paddingHorizontal: 15 }}>
            <Carousel
              style={styles.wrapper}
              infinite
              afterChange={this.onselectedIndexChange}
            >
              <View style={[styles.container, { backgroundColor: 'red' }]}>
                <Image
                  source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528609547586&di=e3e07016dfb2da48ac7abfaaf9e7d427&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D202141730%2C2222781621%26fm%3D214%26gp%3D0.jpg' }}
                />
              </View>
              <View style={[styles.container, { backgroundColor: 'blue' }]}>
                <Image
                  source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528609547586&di=e3e07016dfb2da48ac7abfaaf9e7d427&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D202141730%2C2222781621%26fm%3D214%26gp%3D0.jpg' }}
                />
              </View>
            </Carousel>
          </View>
        </WingBlank>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  wrapper: {
    backgroundColor: '#fff',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  text: {
    color: '#fff',
    fontSize: 36,
  },
  logo: {
    width: '300px'
  }
});
