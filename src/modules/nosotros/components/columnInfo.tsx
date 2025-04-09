import React from 'react';
import styles from '../assets/css/columnInfo.module.css';

interface ColumnInfoProps {
    image: string;
    title: string;
    description: string;
}

const ColumnInfo: React.FC<ColumnInfoProps> =({ image, title, description }) => {
    return (

          <div className="column">
            <img alt="" src={image} className={styles.columnImage} />
            <h3 className={styles.columnTitle}>{title}</h3>
            <p className={styles.columnParagraph}>{description}</p>
          </div>

    );
};

export default ColumnInfo;
