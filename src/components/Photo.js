import React from 'react';

// img src is passed props from photolist.js
const Photo = props => (
    <div className="photo-container">
        <ul>
            <li>
                <img src={props.url} alt="" />
            </li>
        </ul>
    </div>
);

export default Photo;