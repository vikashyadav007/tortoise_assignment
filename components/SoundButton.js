import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import sound_off from '../assets/sound_off.png';
import sound_on from '../assets/sound_on.png';

const SoundButton = props => {
  return (
    <TouchableOpacity
      style={styles.screen}
      onPress={props.onPress}
      activeOpacity={1}>
      <View style={styles.buttonView}>
        <Image source={props.muted ? sound_off : sound_on} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    borderRadius: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.63)',
    alignItems: 'center',
    justifyContent: 'center',
    height: 31,
    width: 49,
  },
  screen: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export default SoundButton;
