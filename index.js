import React from 'react';
import { AppRegistry, View } from 'react-native';

import AlbumList from './src/Components/AlbumList'
import Header from './src/Components/Header'

const App = () => (
    // This flex: 1 is when we have some ScrollView
    <View stye={{ flex: 1 }}>
        <Header headerTitle={'Albums!'} />
        <AlbumList />
    </View>
);

AppRegistry.registerComponent('albums', () => App)
