import { Component } from 'react';

class ImageGallery extends Component {
  render() {
    const { searchResult, page } = this.props;
    return (
      <ImageGallery>
        {searchResult.map(picture => {
          <li className='ImageGalleryItem'>
            <img src='' alt='' className='ImageGalleryItem-image' />
          </li>;
        })}
      </ImageGallery>
    );
  }
}

export default ImageGallery;
