import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { AppSection } from './App.styled';
import { API_KEY, API_URL } from '../../constants/constants';

import { Component } from 'react';

class App extends Component {
  state = {
    status: 'idle',
    page: 1,
    query: '',
    searchResult: null,
    error: '',
  };

  handleFormSubmit = query => {
    console.log('query - ' + query);
    this.setState({ status: 'resolved', query });
  };

  changeStatus = newStatus => {
    if (this.state.status !== newStatus) {
      this.setState({ status: newStatus });
    }
  };

  // 'idle';
  // 'pending';
  // 'resolved';
  // 'rejected';

  // updateState(data, status) {
  //   if (!data) return;
  //   console.dir(data);
  //   if (status === 'pending') {
  //     this.setState(({ status, searchResult }) => {
  //       if (status !== 'pending') {
  //         return { status: 'pending', query: data.query, page: 1, searchResult };
  //       }
  //       return;
  //     });
  //   }

  //   if (status === 'resolved') {
  //     this.setState(({ status }) => {
  //       if (status !== 'resolved') {
  //         return {
  //           status: 'resolved',
  //           searchResult: data.hits,
  //         };
  //       }
  //     });
  //   }
  // }
  // componentDidMount() {
  //   console.log('mount - ' + this.state.query);
  //   if (this.state.query) {
  //     this.setState({ status: 'pending' });
  //     this.getResponse()
  //       .then(response => response.data)
  //       .then(({ total, hits }) => {
  //         if (total > 0) {
  //           const pages = total % 40 > 0 ? parseInt(total / 40) + 1 : total / 40;
  //           console.log(pages);
  //           console.log(total);
  //           console.log(hits);
  //           this.setState({ status: 'resolved', searchResult: { pages, total, hits } });
  //         }
  //       });
  //   }
  // }

  render() {
    return (
      <AppSection>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {this.state.status === 'idle' && <div>Initial</div>}
        {this.state.status === 'pending' && <div>Pending for {this.state.query}...</div>}
        <ImageGallery query={this.state.query} changeStatus={this.changeStatus} />
        {this.state.status === 'rejected' && <div>Error</div>}
      </AppSection>
    );
  }
}

export default App;
