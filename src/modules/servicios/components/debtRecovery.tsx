import React from 'react';
import '../assets/css/debtRecovery.css';

interface debtRecoveryProps {
    title: string;
    description: string;
}

const debtRecovery: React.FC<debtRecoveryProps> =({ title, description }) => {
    return (
        <div className="row">
            <h3 className="row-title">{title}</h3>
            <p className="row-description">{description}</p>
        </div>
    );
};

export default debtRecovery;
