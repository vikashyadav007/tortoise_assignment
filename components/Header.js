import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

import logo from '../assets/logo.png';
import logo2 from '../assets/logo2.png';

const Header = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.left}>
        <View style={styles.top}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
        </View>
        <View style={styles.paddingbtw} />
        <View style={styles.bottom}>
          <Text style={styles.nameText}>Rahul Kumar</Text>
        </View>
      </View>
      <View style={styles.right}>
        <View style={styles.logoView}>
          <Image source={logo2} style={styles.logoImage} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  welcomeText: {
    fontFamily: 'AzeretMono-Regular',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 13,
    color: 'rgba(17, 20, 45, 0.65)',
  },
  nameText: {
    fontFamily: 'AzeretMono-Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 26,
    letterSpacing: -0.368952,
    color: '#11142D',
  },
  paddingbtw: {
    paddingBottom: 5,
  },

  logoImage: {
    // height: 40,
    // width: 40,
  },
});

export default Header;
