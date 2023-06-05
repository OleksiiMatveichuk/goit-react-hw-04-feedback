import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {options.map((el, i) => (
        <Button
          variant="primary"
          type="button"
          onClick={() => onLeaveFeedback(el)}
          name={el}
          key={i}
        >
          {el}
        </Button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
};
