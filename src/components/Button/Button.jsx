import { LoadMoreButton } from './Button.styled';

const Button = ({ title, onClick }) => {
  return <LoadMoreButton onClick={onClick}>{title}</LoadMoreButton>;
};

export default Button;
