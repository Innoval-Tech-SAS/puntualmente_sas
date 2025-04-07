import React from 'react';
import styles from '../assets/css/managementGroup.module.css';

interface managementGroupProps {
    title: string;
    description: string;
}

const managementGroup: React.FC<managementGroupProps> =({ title, description }) => {
    return (
        <div className={styles.managementContainer}>
            <h3 className={styles.managementTitle}>{title}</h3>
            <p className={styles.managementDescription}>{description}</p>
        </div>
    );
};

export default managementGroup;
