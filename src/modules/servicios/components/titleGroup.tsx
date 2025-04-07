import React from 'react';
import '../assets/css/titleGroup.module.css';

interface titleGroupProps {
    title: string;
}

const titleGroup: React.FC<titleGroupProps> =({ title }) => {
    return (
        <div className="container-title">
            <h3 className="title">{title}</h3>
        </div>
    );
};

export default titleGroup;
