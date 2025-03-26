import React from 'react';
import '../assets/css/columnServices.css';

interface ColumnServicesProps {
    image: string;
    title: string;
    sublist: string[];
}

const ColumnServices: React.FC<ColumnServicesProps> =({ image, title, sublist }) => {
    return (
          <div className="column">
            <img src={image} className="column-image" />
            <h3 className="column-title">{title}</h3>
            <div className="list-container">
                <ul>
                    {sublist.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
          </div>

    );
};

export default ColumnServices;
