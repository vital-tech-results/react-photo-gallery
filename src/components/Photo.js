import React from 'react';

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