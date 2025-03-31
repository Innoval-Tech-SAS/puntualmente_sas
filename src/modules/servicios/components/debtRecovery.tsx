import React from 'react';
import styles from '../assets/css/debtRecovery.module.css';

interface debtRecoveryProps {
    title: string;
    description: string;
    isReverse: boolean;
}

const debtRecovery: React.FC<debtRecoveryProps> =({ title, description }) => {
    return (
        <div className={styles.row}>
            <h3 className={styles.rowTitle}>{title}</h3>
            <p className={styles.rowDescription}>{description}</p>
        </div>
    );
};

export default debtRecovery;
