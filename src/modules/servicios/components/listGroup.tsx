import React from 'react';
import '../assets/css/listGroup.css';

interface listGroupProps {
    title: string;
    list: string[];
}

const listGroup: React.FC<listGroupProps> =({ title, list }) => {
    return (
        <div className="container-list-group">
            <h3 className="list-title">{title}</h3>
            <div className="list-container-group">
                <ul>
                    {list.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default listGroup;
