import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

import Header from './components/Header';
import IhponeVideo from './components/IphoneVideo';
import MMTVideo from './components/MMTVideo';

const App = props => {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="rgba(249, 249, 249, 0.8)"
      />
      <ScrollView style={styles.screen}>
        <Header />
        <IhponeVideo />
        <MMTVideo />
        <View style={styles.paddingBottom} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: 'rgba(249, 249, 249, 0.8)',
  },
  screen: {
    backgroundColor: '#DDD9D9',
    height: '100%',
    width: '100%',
  },
  paddingBottom: {
    paddingBottom: 30,
  },
});

export default App;
