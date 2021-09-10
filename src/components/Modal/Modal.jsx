import { Component } from 'react';
import { OverlayDiv, ModalDiv, ModalImg } from './Modal.styled';

class Modal extends Component {
  onTapped = e => {
    const { prev, next } = this.props.modalImages;
    e.preventDefault();
    console.log(e);
    if (e.key === 'Escape') this.props.exitFunc();
    if (e.key === 'ArrowLeft') this.props.changeNeighbors(prev.id);
    if (e.key === 'ArrowRight') this.props.changeNeighbors(next.id);
  };
  componentDidMount() {
    console.log('mount');
    window.addEventListener('keydown', this.onTapped);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onTapped);
  }

  render() {
    const { curr } = this.props.modalImages;
    return (
      <OverlayDiv>
        <ModalDiv>
          <ModalImg src={curr.largeImageURL} alt={curr.tags} />
        </ModalDiv>
      </OverlayDiv>
    );
  }
}

export default Modal;
