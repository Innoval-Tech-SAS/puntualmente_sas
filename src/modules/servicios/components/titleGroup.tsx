import React from 'react';
import '../assets/css/titleGroup.css';

interface titleGroupProps {
    title: string;
}

const titleGroup: React.FC<titleGroupProps> =({ title }) => {
    return (
        <div className="container-group">
            <h3 className="container-title-group">{title}</h3>
        </div>
    );
};

export default titleGroup;
