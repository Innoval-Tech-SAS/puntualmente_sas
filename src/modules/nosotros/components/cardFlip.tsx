import React from 'react';
import styles from '../assets/css/cardFlip.module.css';

interface CardFlipProps {
    title: string;
    description: string;
    bulletPoints: string[];
}

const CardFlip: React.FC<CardFlipProps> = ({ title, description, bulletPoints }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p className={styles.cardText}>{description}</p>
                </div>
                <div className={styles.cardBack}>
                    
                    <ul className={styles.cardList}>
                        {bulletPoints.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CardFlip;
