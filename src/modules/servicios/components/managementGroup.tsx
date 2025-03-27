import React from 'react';
import '../assets/css/managementGroup.css';

interface managementGroupProps {
    title: string;
    description: string;
}

const managementGroup: React.FC<managementGroupProps> =({ title, description }) => {
    return (
        <div className="container">
            <h3 className="container-title">{title}</h3>
            <p className="container-description">{description}</p>
        </div>
    );
};

export default managementGroup;
