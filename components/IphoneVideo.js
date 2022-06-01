import React, {useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Video from 'react-native-video';

import SoundButton from './SoundButton';
import MyColors from '../utils/colors';
import Fonts from '../utils/fonts';

import iphone from '../assets/iphone.mp4';
import truck from '../assets/truck.png';
import charger from '../assets/charger.png';
import gift from '../assets/gift.png';
import ImageHeading from './ImageHeading';

const IphoneVideo = props => {
  const [muted, setMuted] = useState(true);

  var player = React.useRef();
  const videoBuffer = isBuffer => {
    console.log(isBuffer);
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  var list = [
    {id: 1, image: truck, text: 'Priority Delivery'},
    {id: 2, image: charger, text: 'Free Charger'},
    {id: 3, image: gift, text: 'Tortoise Merch'},
  ];

  return (
    <View style={styles.screen}>
      <View style={styles.videoView}>
        <Video
          source={iphone}
          style={{width: '100%', height: 255}}
          controls={false}
          onBuffer={videoBuffer}
          resizeMode="cover"
          repeat={true}
          fullscreen={false}
          scaleX={1}
          scaleY={1}
          muted={muted}
        />
        <SoundButton muted={muted} onPress={toggleMute} />
      </View>
      <View style={styles.content}>
        <ImageHeading
          head1="IPHONE SAVINGS PLAN"
          head2="Save up for the next iPhone and"
          subHead2="get 10% Cashback!"
        />
        <View style={styles.horizontal}>
          {list.map((value, index) => {
            return (
              <View key={value.id}>
                <View style={styles.imageView}>
                  <Image source={value.image} height="100%" width="100%" />
                </View>
                <Text style={styles.imageText}>{value.text}</Text>
              </View>
            );
          })}
        </View>
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
    marginBottom: 25,
  },
  videoView: {
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    overflow: 'hidden',
  },

  content: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  greenText: {
    color: MyColors.tortoise_green,
  },
  horizontal: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  imageView: {
    backgroundColor: '#EFEFEF',
    borderRadius: 4,
    width: 90,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageText: {
    fontFamily: Fonts.regular,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 9.90766,
    lineHeight: 12,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.5)',
    marginVertical: 10,
  },
});

export default IphoneVideo;
