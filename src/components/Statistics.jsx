import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ListGroup>
      <ListGroup.Item>
        <p>Good:</p>
        <span>{good}</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <p>Neutral:</p>
        <span>{neutral}</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <p>Bad:</p>
        <span>{bad}</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <p>Total</p>
        <span>{total}</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <p>Positive feedback:</p>
        <span>{positivePercentage || 0} %</span>
      </ListGroup.Item>
    </ListGroup>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
