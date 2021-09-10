import { ImageGalleryItemImg, ImageGalleryItemLi } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ id, src, alt, onClick }) => {
  return (
    <ImageGalleryItemLi>
      <ImageGalleryItemImg src={src} alt={alt} id={id} loading='lazy' onClick={onClick} />
    </ImageGalleryItemLi>
  );
};

export default ImageGalleryItem;
