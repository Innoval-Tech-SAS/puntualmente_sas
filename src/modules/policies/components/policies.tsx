import React from "react";
import styles from "../assets/policies.module.css";
import PoliciesProps from "../types/PoliciesProps";

const Policies: React.FC<PoliciesProps> = ({
  title,
  paragraphs,
  subparagraphs,
  secondParagraphs,
}) => {
  const renderText = (text: string | string[]) =>
    (Array.isArray(text) ? text : [text]).map((t, i) => (
      <p key={i} className={styles.policiesParagraph}>
        {t}
      </p>
    ));

  const renderSubparagraph = (
    sub: { title?: string; text: string | string[] },
    idx: number
  ) => (
    <div key={idx} className={styles.subparagraphsContainer}>
      {sub.title && <h3 className={styles.subparagraphTitle}>{sub.title}</h3>}
      {renderText(sub.text)}
    </div>
  );

  const renderParagraph = (
    paragraph: {
      title?: string;
      text: string | string[];
      subparagraphs?: typeof subparagraphs;
    },
    idx: number
  ) => (
    <div key={idx} className={styles.paragraphContainer}>
      {paragraph.title && (
        <h3 className={styles.paragraphTitle}>{paragraph.title}</h3>
      )}
      {renderText(paragraph.text)}
      {paragraph.subparagraphs &&
        (Array.isArray(paragraph.subparagraphs)
          ? paragraph.subparagraphs.map(renderSubparagraph)
          : renderSubparagraph(paragraph.subparagraphs, 0))}
    </div>
  );

  return (
    <div className={styles.policiesContent}>
      <h2 className={styles.policiesTitle}>{title}</h2>
      <div className={styles.paragraphsContainer}>
        {Array.isArray(paragraphs)
          ? paragraphs.map(renderParagraph)
          : renderParagraph(paragraphs, 0)}

        {subparagraphs &&
          (Array.isArray(subparagraphs)
            ? subparagraphs.map(renderSubparagraph)
            : renderSubparagraph(subparagraphs, 0))}

        {secondParagraphs && renderText(secondParagraphs)}
      </div>
    </div>
  );
};

export default Policies;
