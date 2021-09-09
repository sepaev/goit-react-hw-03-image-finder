import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { AppSection } from './App.styled';
import { API_KEY, API_URL } from '../../constants/constants';
import axios from 'axios';

import { Component } from 'react';

class App extends Component {
  state = {
    status: 'idle',
    page: 1,
    query: '',
    searchResult: [],
  };

  doSearch = query => {
    console.log('query - ' + query);
    const data = { query };
    this.updateState(data, 'pending');
  };

  getOptions() {
    return {
      key: API_KEY,
      q: this.state.query,
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
  // 'idle';
  // 'pending';
  // 'resolved';
  // 'rejected';

  async getContent() {
    const options = this.getOptions();
    const stringOptions = this.getStringOptions(options);
    axios.defaults.baseURL = `${API_URL}`;
    try {
      const response = await axios.get(stringOptions);
      return response.data;
    } catch (error) {
      console.log(error);
      this.updateState(error, 'rejected');
    }
  }
  updateState(data, status) {
    if (!data) return;
    console.dir(data);
    if (status === 'pending') {
      this.setState(({ status, searchResult }) => {
        if (status !== 'pending') {
          return { status: 'pending', query: data.query, page: 1, searchResult };
        }
        return;
      });
    }

    if (status === 'resolved') {
      this.setState(prevState => {
        return {
          status: 'resolved',
          page: prevState.page,
          query: prevState.query,
          searchResult: data.hits,
        };
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.getContent().then(data => {
        this.updateState(data, 'resolved');
      });
    }
  }
  render() {
    return (
      <AppSection>
        <SearchBar doSearch={this.doSearch} />
        {this.state.status === 'idle' && <div>Initial</div>}
        {this.state.status === 'pending' && <div>Pending for {this.state.query}...</div>}
        {this.state.status === 'resolved' && (
          <ImageGallery data={this.state.searchResult} page={this.state.page} />
        )}
        {this.state.status === 'rejected' && <div>Error</div>}
      </AppSection>
    );
  }
}

export default App;
