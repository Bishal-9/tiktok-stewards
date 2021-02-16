import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import Video from 'react-native-video';
import styles from './styles';

const Post = ({url}) => {
  const [paused, setPaused] = useState(false);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <Video
          source={{
            uri: url,
          }}
          style={styles.video}
          onError={(e: LoadError) => console.log(e)}
          resizeMode={'cover'}
          repeat={true}
          paused={paused}
        />
      </TouchableWithoutFeedback>

      {/* <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <Text>Button Container</Text>
        </View>
        <View>
          <Text>Bottom Component</Text>
        </View>
      </View> */}
    </View>
  );
};

export default Post;
