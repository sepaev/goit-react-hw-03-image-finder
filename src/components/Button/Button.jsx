import { PropTypes } from 'prop-types';
import { LoadMoreButton } from './Button.styled';

const Button = ({ title, onClick }) => {
  return <LoadMoreButton onClick={onClick}>{title}</LoadMoreButton>;
};

export default Button;

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
