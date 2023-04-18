import React, { useState } from 'react';
import styles from '../src/styles/Accordion.module.css';

interface AccordionContent {
  title: string;
  content: string;
}

const Accordion = ({ title, content }: AccordionContent) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionHeader} onClick={handleToggle}>
        {title}
        <span className={styles.accordionIcon}>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className={styles.accordionContent}>{content}</div>}
    </div>
  );
};

export default Accordion;