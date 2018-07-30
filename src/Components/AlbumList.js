import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.state = { albums: [] };
        // this.renderAlbums = this.renderAlbums.bind(this);
    }

    componentWillMount() {
        // this is the perfect place for HTTP requests
        // AXIOS - fech HTTP requests (npm install --save axios)
        console.log('dziala to?');

        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => this.setState({ albums: response.data }));

        // There is one issue: when this ^ http request is made, we have to wait some amount of time to get whole response, but AlbumList component will be rendered imidiatly after http request is made. So wew have to force it to re-render after actually fetching all data from API --> component state
    }

    renderAlbums () {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} record={album} />
        );
    }

    render () {
        console.log('to jest to: ', this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;

// secont native way of HTTP requests if axio doesn't work
// componentWillMount() {
//         fetch( 'https://swapi.co/api/species/?format=json' )
//             .then(response => response.json())
//             .then(({results: items}) => this.setState({items})
//         )
//     }
