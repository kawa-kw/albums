import React from 'react';
import { AppRegistry, View } from 'react-native';

import AlbumList from './src/Components/AlbumList'
import Header from './src/Components/Header'

const App = () => (
    <View>
        <Header headerTitle={'Albums!'} />
        <AlbumList />
    </View>
);

AppRegistry.registerComponent('albums', () => App)
