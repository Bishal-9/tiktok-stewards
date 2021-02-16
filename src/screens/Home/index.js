import Post from '../../components/Post';
import React, {useState} from 'react';
import {View, Dimensions, Button} from 'react-native';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';

const ViewTypes = {
  FULL: 0,
};

function Home() {
  const {width} = Dimensions.get('window');
  const {height} = Dimensions.get('window');

  const [dataProvider, setDataProvider] = useState(
    new DataProvider((r1, r2) => {
      return r1 !== r2;
    }),
  );

  const [items, setItems] = useState([]);
  const [layoutProvider, setLayoutProvider] = useState(
    new LayoutProvider(
      (index) => ViewTypes.FULL,
      (type, dim) => {
        switch (type) {
          case ViewTypes.FULL:
            dim.width = width;
            dim.height = height;
            break;
          default:
            dim.width = 0;
            dim.height = 0;
        }
      },
    ),
  );

  const rowRenderer = (type, item) => {
    switch (type) {
      case ViewTypes.FULL:
        return <Post url={item} />;
      default:
        return null;
    }
  };

  return (
    <View style={{width: width, height: height}}>
      <Button
        title="START FETCHING VIDEO"
        onPress={() => {
          setItems([...items, 'https://www.w3schools.com/html/mov_bbb.mp4']);
          setDataProvider(dataProvider.cloneWithRows(items));
        }}
      />
      <RecyclerListView
        style={{flex: 1}}
        layoutProvider={layoutProvider}
        dataProvider={dataProvider}
        rowRenderer={rowRenderer}
        onScroll={() => {
          setItems([...items, 'https://www.w3schools.com/html/mov_bbb.mp4']);
          setDataProvider(dataProvider.cloneWithRows(items));
        }}
      />
    </View>
  );
}

export default Home;
