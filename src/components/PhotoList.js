import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

// props are passed from App.js and in this case prop is the performsearch function in App.js
// interpolation is used to create image url
const PhotoList = props => {
    const results = props.photos;
    let photos;
    if (results.length > 0) {
        photos = results.map(photo =>
            <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />
        );
    } else {
        photos = <NotFound />;
    }

    // photos variable above is rendered below
    return (
        <div className="photo-container">
            <h2>Photos of {props.query}</h2>
            <ul>
                {photos}
            </ul>
        </div>
    );
}
export default PhotoList;