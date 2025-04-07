import React from 'react';
import styles from '../assets/css/columnServices.module.css';
import { BsHexagonFill } from "react-icons/bs";

interface ColumnServicesProps {
    image: string;
    title: string;
    sublist: string[];
}

const ColumnServices: React.FC<ColumnServicesProps> =({ image, title, sublist }) => {
    return (
          <div className={styles.column}>
            <img alt='' src={image} className={styles.columnImage} />
            <h3 className={styles.columnTitle}>{title}</h3>
            <div className={styles.listContainer}>
                <ul>
                    {sublist.map((point, index) => (
                        <li key={index} className={styles.listItem}>
                            <BsHexagonFill size={20} color='' className={styles.listIcon} />
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
          </div>

    );
};

export default ColumnServices;
