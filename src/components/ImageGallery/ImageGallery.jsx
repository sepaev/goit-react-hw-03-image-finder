import { Component } from 'react';
import { ImageGalleryUl } from './ImageGallery.styled';
import axios from 'axios';
import { API_KEY, API_URL } from '../../constants/constants';

class ImageGallery extends Component {
  state = { pages: 0, total: 0, hits: null };

  getOptions(query) {
    return {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 40,
      page: this.state.page,
    };
  }
  getStringOptions = options => {
    const { key, q, image_type, orientation, safesearch, per_page, page } = options;
    if (!key || !q) return '';

    let stringOptions = '?';
    stringOptions += 'key=' + key;
    stringOptions += '&q=' + q;
    if (image_type) stringOptions += '&image_type=' + image_type;
    if (orientation) stringOptions += '&orientation=' + orientation;
    if (safesearch) stringOptions += '&safesearch=' + safesearch;
    if (per_page) stringOptions += '&per_page=' + per_page;
    if (page) stringOptions += '&page=' + page;

    return stringOptions;
  };

  getResponse = async query => {
    const options = this.getOptions(query);
    const stringOptions = this.getStringOptions(options);
    axios.defaults.baseURL = `${API_URL}`;
    try {
      const response = await axios.get(stringOptions);
      return response;
    } catch (error) {
      console.log(error);
      // this.updateState(error, 'rejected');
    }
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;
    const changeStatus = this.props.changeStatus;
    if (JSON.stringify(prevState) === JSON.stringify(this.state) && prevQuery === nextQuery) {
      console.log('return');
    } else {
      console.log(prevQuery + ' - ' + nextQuery);

      changeStatus('pending');
      if (nextQuery) {
        const data = await this.getResponse(nextQuery)
          .then(response => response.data)
          .then(({ total, hits }) => {
            changeStatus('resolved');
            if (total > 0) {
              const pages = total % 40 > 0 ? parseInt(total / 40) + 1 : total / 40;
              console.log('pages ' + pages);
              console.log('total ' + total);
              console.log(hits);
              return { pages, total, hits: [...hits] };
            }
            return { pages: 0, total: 0, hits: null };
          });
        this.setState(data);
      }
    }
  };
  render() {
    // const { pictures, page } = this.props;
    // if (pictures.children) return;
    // console.dir(this.props);
    const { pages, total, hits } = this.state;
    return (
      <ImageGalleryUl>
        {hits &&
          hits.map(hits => {
            return (
              <li>
                <img src={hits.previewURL} alt={hits.tags} />
              </li>
            );
          })}
      </ImageGalleryUl>
    );
  }
}

export default ImageGallery;
