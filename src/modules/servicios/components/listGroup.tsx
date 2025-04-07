import React from 'react';
import styles from '../assets/css/listGroup.module.css';

interface listGroupProps {
    title: string;
    list: string[];
}

const listGroup: React.FC<listGroupProps> =({ title, list }) => {
    return (
        <div>
            <h3 className={styles.listTitle}>{title}</h3>
            <div className={styles.listContainer}>
                <ul>
                    {list.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default listGroup;
