/**
 * Created by buddy on 2019-05-04.
 */

import { StyleSheet } from 'react-native';

export const mergeStyle = (style, newStyle) => {
  let _style = [];
  if (style instanceof Array) {
    _style = style;
  } else {
    _style.push(style);
  }
  if (newStyle instanceof Array) {
    _style = _style.concat(newStyle);
  } else {
    _style.push(newStyle);
  }
  return _style;
};

export const styles = StyleSheet.create({
  flex1: { flex: 1 },
  center: { justifyContent: 'center', alignItems: 'center' },
});
