import React from 'react';
import styles from '../assets/policies.module.css' 


interface policiesProps{
    title: string;
    paragraphs: string[];
}

const policies: React.FC<policiesProps> =({title, paragraphs}) => {
  return (
        <div className={styles.policiesContent}>
            <h2 className={styles.policiesTitle}>{title}</h2>
            <div className={styles.paragraphsContainer}>
                {paragraphs.map((paragraph, idx) => (
                    <p key={idx} className={styles.policiesParagraph}>
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default policies;