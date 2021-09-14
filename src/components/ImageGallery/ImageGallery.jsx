import PropTypes from 'prop-types';
import { Component } from 'react';
import { ImageGalleryUl } from './ImageGallery.styled';
import { v4 as uuidv4 } from 'uuid';
import { api, perPage } from '../../services/api';
import ImageGalleryItem from '../ImageGalleryItem';
import Modal from '../Modal';
import Button from '../Button';
import 'react-toastify/dist/ReactToastify.css';

class ImageGallery extends Component {
  state = {
    response: { pages: 0, total: 0, hits: null },
    query: '',
    readyForResponse: true,
    page: 1,
    modalIsOpen: false,
    modalNeighbors: null,
  };

  toggleModal = e => {
    if (e) {
      e.preventDefault();
      const currentId = e.target.id;
      const images = this.getNeighbors(currentId);
      this.setState(prevState => {
        return { modalIsOpen: !prevState.modalIsOpen, modalNeighbors: images };
      });
    } else {
      this.setState(prevState => {
        return { modalIsOpen: !prevState.modalIsOpen, modalNeighbors: null };
      });
    }
  };

  changeNeighbors = id => {
    const images = this.getNeighbors(id);
    this.setState({ modalNeighbors: images });
  };

  getNeighbors = id => {
    const { hits } = this.state.response;
    if (hits) {
      for (let i = 0; i < hits.length; i++) {
        if (hits[i].id.toString() === id.toString()) {
          const prev = i === 0 ? hits[hits.length - 1] : hits[i - 1];
          const next = i === hits.length - 1 ? hits[0] : hits[i + 1];
          const curr = hits[i];
          return { prev, curr, next };
        }
      }
    }
    return null;
  };

  getResponse = async (query, page) => {
    try {
      const response = await api.get(`/`, {
        params: {
          q: query,
          page,
        },
      });
      if (response.status === 200) {
        console.log(response);
        return response;
      } else {
        throw new Error('Error - ' + response.status);
      }
    } catch (error) {
      return { data: { total: 0, hits: [], error } };
    }
  };

  getClearStateObject = (query, readyForResponse = false) => {
    return {
      response: { pages: 0, total: 0, hits: null },
      query: query,
      readyForResponse: readyForResponse,
      page: 1,
      modalIsOpen: false,
    };
  };
  loadMore = () => {
    this.setState({ page: this.state.page + 1, readyForResponse: true });
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const propsQuery = this.props.query;
    const doChangeStatus = this.props.changeStatus;
    const { query, readyForResponse } = this.state;
    const page = propsQuery !== query ? 1 : this.state.page;
    //если новый запрос
    if (readyForResponse || propsQuery !== query) {
      doChangeStatus('pending');
      const newState = await this.getResponse(propsQuery, page)
        .then(response => response.data)
        .then(({ total, hits, error }) => {
          if (total > 0) {
            //найдено картинки
            const pages = total % perPage > 0 ? parseInt(total / perPage) + 1 : total / perPage;
            let prevHits;
            if (propsQuery !== query) {
              prevHits = null;
              doChangeStatus('resolved', `Was found ${total} results. Avaliable ${pages} pages!`);
            } else {
              prevHits = prevState.response.hits;
              doChangeStatus(
                'resolved',
                `Added more ${perPage} pictures! Current page ${page} of  ${pages} pages.`,
              );
            }
            return {
              response: {
                pages,
                total,
                hits: prevHits ? [...prevHits, ...hits] : [...hits],
              },
              query: propsQuery,
              readyForResponse: false,
              page,
            };
          }
          if (error) {
            //есть ошибка
            console.dir(error.message);
            doChangeStatus('rejected', error.message);
          } else {
            //не найдено картинки
            doChangeStatus('idle', `Please, start new search.`);
          }
          return this.getClearStateObject(propsQuery, false);
        });
      //запись в стейт нового обьекта
      this.setState(newState);
      window.setTimeout(e => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }, 300);
    }
  };

  render() {
    const { hits } = this.state.response;
    return (
      <>
        <ImageGalleryUl>
          {hits !== null &&
            hits.map(({ id, webformatURL, tags }) => {
              return (
                <ImageGalleryItem
                  key={uuidv4()}
                  id={id}
                  src={webformatURL}
                  alt={tags}
                  onClick={this.toggleModal}
                />
              );
            })}
        </ImageGalleryUl>
        {this.state.response.pages > this.state.page && (
          <Button title={`load more ${perPage} pictures`} onClick={this.loadMore} />
        )}
        {this.state.modalIsOpen && (
          <Modal
            modalNeighbors={this.state.modalNeighbors}
            exitFunc={this.toggleModal}
            changeNeighbors={this.changeNeighbors}
          />
        )}
      </>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
  changeStatus: PropTypes.func.isRequired,
};
