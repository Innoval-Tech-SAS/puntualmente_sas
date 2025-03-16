import React from 'react';
import '../assets/css/cardFlip.css';


interface CardFlipProps {
    title: string;
    description: string;
    backTitle: string;
    bulletPoints: string[];
}

const CardFlip: React.FC<CardFlipProps> = ({ title, description, backTitle, bulletPoints }) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-back">
                    <h3>{backTitle}</h3>
                    <ul>
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
