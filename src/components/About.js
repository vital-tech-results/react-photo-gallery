import React, { Component } from 'react';
export default class App extends Component {

    constructor() {
        super();
        this.state = {
            photos: []
        };

    }

    componentDidMount() {
        fetch('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=9839380f5e08b71ffe23a09092afce7f&tags=rainbows&per_page=&format=json&nojsoncallback=1')
            // .then(response => response.json())
            .then(responseData => {
                this.setState({ photos: responseData.data });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    render() {
        console.log(this.state.photos);
        return (
            <div className="photo-container">
                <h3>This app was made using react and flickr API</h3>
                <p>Thank you.</p>
            </div>
        )
    }
}