import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight as rigthArrow, faChevronDown as downArrow } from '@fortawesome/free-solid-svg-icons';

interface ExpandedData {
  data: {
    id: number,
    question: string,
    answer: string,
  }
}

const Expandable = (props: ExpandedData) => {
  const { question, answer } = props.data;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className="expandable__container">
        <button onClick={() => setIsExpanded(!isExpanded)} type="button" className={`expandable ${isExpanded ? 'expanded' : ''}`}>
          <h4 className="expandable__title">{question}</h4>
          <FontAwesomeIcon className="expandable__icon" icon={isExpanded ? downArrow : rigthArrow} />
        </button>
        {isExpanded && (
          <p className="expandable__subtitle">{answer}</p>
        )}
      </div>
    </>
  );
};

export default Expandable;
