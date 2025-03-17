import React from 'react';
import '../assets/css/columnInfo.css';

interface ColumnInfoProps {
    image: string;
    title: string;
    description: string;
}

const ColumnInfo: React.FC<ColumnInfoProps> =({ image, title, description }) => {
    return (
        <div className="column-layout">
          <div className="column">
            <img src={image} className="column-image" />
            <h3 className="column-title">{title}</h3>
            <p className="column-paragraph">{description}</p>
          </div>
      </div>
    );
};

export default ColumnInfo;
