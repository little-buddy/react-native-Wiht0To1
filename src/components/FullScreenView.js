/**
 * Created by buddy on 2019-05-04.
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import { mergeStyle, styles } from '../utils';

export const FullScreenView = (style, children, ...props) => {
  let _style = [styles.flex1, styles.center];
  _style = mergeStyle(_style, style);
  return (
    <SafeAreaView style={_style} {...props}>
      {children}
    </SafeAreaView>
  );
};
