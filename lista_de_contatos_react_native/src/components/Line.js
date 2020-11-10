import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default ({label = '', content = '-'}) => {
  return (
    <View style={styles.line}>
      <Text
        style={[
          styles.cell,
          styles.label,
          label.length > 8 ? styles.longLabel : null,
        ]}>
        {label}
      </Text>
      <Text style={[styles.cell, styles.content]}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    paddingTop: 3,
    paddingBottom: 3,
    borderWidth: 1,
    borderColor: '#c5c5c5',
  },
  cell: {
    fontSize: 18,
    paddingLeft: 5,
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
  },
  longLabel: {
    fontSize: 12,
  },
  content: {
    flex: 3,
  },
});