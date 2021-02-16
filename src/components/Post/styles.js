import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('screen').width,
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    right: 0,
  },
});

export default styles;
