import React, {useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

import SoundButton from './SoundButton';
import MyColors from '../utils/colors';

import Video from 'react-native-video';
import video2 from '../assets/video2.mp4';

import mmt_logo from '../assets/mmt_logo.png';

const MMTVideo = props => {
  const [muted, setMuted] = useState(true);
  var player = React.useRef();
  const videoBuffer = isBuffer => {
    console.log(isBuffer);
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.videoView}>
        <Video
          source={video2}
          style={{width: '100%', height: 400}}
          controls={false}
          onBuffer={videoBuffer}
          resizeMode="cover"
          repeat={true}
          fullscreen={false}
          scaleX={2}
          scaleY={1}
          muted={muted}
        />
        <View style={styles.mmtLogoView}>
          <Image source={mmt_logo} />
        </View>
        <SoundButton muted={muted} onPress={toggleMute} />
      </View>
      <View style={styles.content}>
        <Text style={styles.head1}>MAKE MY TRIP SAVINGS PLAN</Text>
        <Text style={styles.head2}>
          Save up for the next Vacation and{' '}
          <Text style={styles.greenText}>get 10% Cashback!</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 17,
    marginTop: 20,
  },
  videoView: {
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    overflow: 'hidden',
  },
  head1: {
    fontFamily: 'Haffer XH',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 18,
    color: '#6F767E',
  },
  head2: {
    fontFamily: 'Haffer XH',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 27,
    color: '#001B19',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  greenText: {
    color: MyColors.tortoise_green,
  },
  mmtLogoView: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
});

export default MMTVideo;
