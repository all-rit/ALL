import { useDroppable } from '@dnd-kit/core';
import DraggableCard from './DraggableCard';
import PropTypes from 'prop-types';

const DroppableColumn = ({
  column,
  cards,
  colStyle,
  cardStyle,
  colHeaderStyle,
  colContainerStyle,
  cardIcon,
}) => {
  const { setNodeRef } = useDroppable({ id: column.id });

  return (
    <div className={colContainerStyle}>
      <h4 className={colHeaderStyle}>{column.title}</h4>
      <div ref={setNodeRef} className={colStyle}>
        {cards.map((card) => (
          <DraggableCard
            key={card.id}
            card={card}
            cardStyle={cardStyle}
            cardIcon={cardIcon}
          />
        ))}
      </div>
    </div>
  );
};

DroppableColumn.propTypes = {
  column: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string,
      isCorrect: PropTypes.bool,
    }),
  ).isRequired,
  colStyle: PropTypes.string.isRequired,
  cardStyle: PropTypes.string.isRequired,
  colHeaderStyle: PropTypes.string.isRequired,
  colContainerStyle: PropTypes.string,
  cardIcon: PropTypes.any,
};

export default DroppableColumn;
