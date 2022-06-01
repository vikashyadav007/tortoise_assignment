import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Fonts from '../utils/fonts';
import MyColors from '../utils/colors';

const ImageHeading = props => {
  return (
    <View>
      <Text style={styles.head1}>{props.head1}</Text>
      <Text style={styles.head2}>
        {`${props.head2} `}
        <Text style={styles.greenText}>{props.subHead2}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  head1: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 18,
    color: '#6F767E',
  },
  head2: {
    fontFamily: Fonts.regular,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 27,
    color: '#001B19',
  },
  greenText: {
    color: MyColors.tortoise_green,
  },
});

export default ImageHeading;
