import React from 'react';
import '../assets/css/titleGroup.module.css';

interface titleGroupProps {
    title: string;
}

const titleGroup: React.FC<titleGroupProps> =({ title }) => {
    return (
        <div className="container-title">
            <h3>{title}</h3>
        </div>
    );
};

export default titleGroup;
