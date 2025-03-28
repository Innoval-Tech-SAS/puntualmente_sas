import React, { useState } from "react";
import { ContactAccordionProps } from "../types/locationTypes";
import styles from "../assets/css/contactAccordion.module.css";

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

const ContactAccordion: React.FC<ContactAccordionProps> = ({ contactData }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.container}>
            {contactData.map((contact, index) => {
                const isActive = activeIndex === index;
                return (
                    <div
                        key={index}
                        className={`${styles.item} ${isActive ? styles.active : ""}`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <div className={styles.header}>
                            <h3 className={styles.title}>{contact.title}</h3>
                            <span>{isActive ? "−" : "+"}</span>
                        </div>

                        {isActive && (
                            <div className={styles.content}>
                                <div className={styles.iconContainer}>
                                    <LocationIcon />
                                    <p>{contact.address}</p>
                                </div>
                                <div className={styles.iconContainer}>
                                    <PhoneIcon />
                                    <p>{contact.phone}</p>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default ContactAccordion;
