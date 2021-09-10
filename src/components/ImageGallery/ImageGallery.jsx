import { Component } from 'react';
import { ImageGalleryUl } from './ImageGallery.styled';
import Button from '../Button/Button';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import {
  API_KEY,
  API_URL,
  IMAGE_TYPE,
  ORIENTATION,
  SAFESEARCH,
  PER_PAGE,
} from '../../constants/constants';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
axios.defaults.baseURL = `${API_URL}`;

class ImageGallery extends Component {
  state = { pages: 0, total: 0, hits: null, query: '', newRequest: true, page: 1, error: null };

  getOptions(query) {
    return {
      key: API_KEY,
      q: query,
      image_type: IMAGE_TYPE,
      orientation: ORIENTATION,
      safesearch: SAFESEARCH,
      per_page: PER_PAGE,
      page: this.state.page,
    };
  }
  getStringOptions = query => {
    const options = this.getOptions(query);
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
    const options = this.getStringOptions(query);
    try {
      const response = await axios.get(options);
      if (response.status === 200) {
        return response;
      } else {
        return Promise.reject(new Error('Error - ' + response.status));
      }
    } catch (error) {
      console.log(error);
      // this.updateState(error, 'rejected');
    }
  };

  getClearStateObject = (query, newRequest = false) => {
    return {
      pages: 0,
      total: 0,
      hits: null,
      query: query,
      newRequest: newRequest,
      page: 1,
      error: null,
    };
  };
  loadMore = () => {
    const nextPage = this.state.page + 1;
    if (nextPage > this.state.pages) alert('no more pages');
    this.setState({ page: nextPage, newRequest: true });
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const propsQuery = this.props.query;
    const doChangeStatus = this.props.changeStatus;
    const { query, newRequest, page } = this.state;

    if (propsQuery !== query && newRequest === false) {
      this.setState(this.getClearStateObject(propsQuery, true));
      return;
    }
    //если новый запрос
    if (newRequest) {
      doChangeStatus('pending');
      const newState = await this.getResponse(propsQuery)
        .then(response => response.data)
        .then(({ total, hits }) => {
          if (total > 0) {
            //найдено картинки
            doChangeStatus('resolved');
            const pages = total % PER_PAGE > 0 ? parseInt(total / PER_PAGE) + 1 : total / PER_PAGE;
            return {
              pages,
              total,
              hits: prevState.hits ? [...prevState.hits, ...hits] : [...hits],
              query: propsQuery,
              newRequest: false,
              page,
              error: null,
            };
          }
          //не найдено картинки
          doChangeStatus('idle');
          return this.getClearStateObject(propsQuery, false);
        });
      //запись в стейт нового обьекта
      this.setState(newState);
      // if (this.state.total > PER_PAGE) {
      window.setTimeout(e => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }, 300);
    }
  };

  render() {
    const { hits } = this.state;
    return (
      <>
        <ImageGalleryUl>
          {hits !== null &&
            hits.map(({ id, webformatURL, tags }) => {
              return <ImageGalleryItem key={uuidv4()} id={id} src={webformatURL} alt={tags} />;
            })}
        </ImageGalleryUl>
        {this.state.total > PER_PAGE && (
          <Button title={`load more ${PER_PAGE} pictures`} onClick={this.loadMore} />
        )}
      </>
    );
  }
}

export default ImageGallery;
