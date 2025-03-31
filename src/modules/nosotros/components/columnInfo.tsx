import React from 'react';
import '../assets/css/columnInfo.css';

interface ColumnInfoProps {
    image: string;
    title: string;
    description: string;
}

const ColumnInfo: React.FC<ColumnInfoProps> =({ image, title, description }) => {
    return (

          <div className="column">
            <img src={image} className="columnImage" />
            <h3 className="columnTitle">{title}</h3>
            <p className="column-paragraph">{description}</p>
          </div>

    );
};

export default ColumnInfo;
