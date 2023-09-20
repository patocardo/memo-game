import React from 'react';
import styles from './Card.module.scss';

interface CardProps {
  image: string;
  isFlipped: boolean;
  matchedBy: number;
  onClick: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({ image, isFlipped, onClick, matchedBy }) => {
  const isMatched = matchedBy > -1;
  return (
    <div
      className={`${styles.flip_card} ${isFlipped || isMatched ? styles.clicked : ''}`}
      onClick={() => { isMatched ? false : onClick() }}
    >
      <div className={styles.inner}>
        <div className={`${styles.front} bg-blue-500`}>
          <img src="/images/game1/pattern_1.png" alt="Memo card" className="w-full h-full object-cover" /> 
        </div>
        <div className={`${styles.back} bg-gray-500`}>
          <img src={image} alt="Memo card" className="w-full h-full object-contain" />
        </div>
      </div>
      {isMatched && (
        <div className={`${styles.cross} ${matchedBy === 1 ? styles.blue : ''}`}></div>
      )}
    </div>

  );
};

export default Card;
