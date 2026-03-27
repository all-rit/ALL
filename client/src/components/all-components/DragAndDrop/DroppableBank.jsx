import { useDroppable } from '@dnd-kit/core';
import DraggableCard from './DraggableCard';
import PropTypes from 'prop-types';

const DroppableBank = ({ bank, bankStyle, cardStyle, cardIcon }) => {
  const { setNodeRef } = useDroppable({ id: 'bank' });

  return (
    <div ref={setNodeRef} className={bankStyle}>
      {bank.map((card) => (
        <DraggableCard
          key={card.id}
          card={card}
          cardStyle={cardStyle}
          cardIcon={cardIcon}
        />
      ))}
    </div>
  );
};

DroppableBank.propTypes = {
  bank: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  bankStyle: PropTypes.string.isRequired,
  cardStyle: PropTypes.string.isRequired,
  cardIcon: PropTypes.any,
};

export default DroppableBank;
