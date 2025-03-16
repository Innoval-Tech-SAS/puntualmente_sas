import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  titleColor?: string; 
  backgroundColor?: string; 
  titleFontFamily?: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, titleColor = '#fff', backgroundColor = 'rgba(198,40,40,1)', titleFontFamily = 'Manrope', children }) => {
  const sectionStyle: React.CSSProperties = {
    backgroundColor: backgroundColor,
    padding: '40px',
  };

  const titleStyle: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '20px',
    color: titleColor,
    fontFamily: titleFontFamily,
    
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
