import { ImageGalleryItemImg, ImageGalleryItemLi } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ id, src, alt, onClick }) => {
  return (
    <ImageGalleryItemLi key={id}>
      <ImageGalleryItemImg src={src} alt={alt} loading='lazy' onClick={onClick} />
    </ImageGalleryItemLi>
  );
};

export default ImageGalleryItem;
