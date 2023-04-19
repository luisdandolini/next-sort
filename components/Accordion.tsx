import React, { useState } from 'react';
import styles from '../src/styles/Accordion.module.css';
import Icon from '@mdi/react';
import { mdiChevronUp, mdiChevronDown } from '@mdi/js';

interface AccordionContent {
  title: string;
  content: any;
  accordionContainer?: React.CSSProperties;
  accordionHeader? : React.CSSProperties;
  accordionContent? : React.CSSProperties;
}

const Accordion = ({ title, content, accordionContainer, accordionHeader, accordionContent }: AccordionContent) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.accordion} style={accordionContainer}>
      <div className={styles.accordionHeader} style={accordionHeader} onClick={handleToggle}>
        {title}
        <span className={styles.accordionIcon}>{isOpen ? <Icon path={mdiChevronUp} size={1} /> : <Icon path={mdiChevronDown} size={1} />}</span>
      </div>
      {isOpen && <div className={styles.accordionContent} style={accordionContent}>{content}</div>}
    </div>
  );
};

export default Accordion;