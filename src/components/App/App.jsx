import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { AppSection, InfoDiv, InfoH1 } from './App.styled';
import { Component } from 'react';

class App extends Component {
  state = {
    status: 'idle',
    query: '',
  };

  handleFormSubmit = query => {
    this.setState({ status: 'resolved', query });
  };

  changeStatus = newStatus => {
    if (this.state.status !== newStatus) {
      this.setState({ status: newStatus });
    }
  };

  render() {
    const { query } = this.state;
    return (
      <AppSection>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {this.state.status === 'idle' && (
          <InfoDiv>
            {query && <InfoH1>Sorry, {query} not found</InfoH1>}
            Waiting for you to start new searching
          </InfoDiv>
        )}
        <ImageGallery query={query} changeStatus={this.changeStatus} />
        {this.state.status === 'rejected' && <InfoDiv>Error</InfoDiv>}
        {this.state.status === 'pending' && <InfoDiv>Searching for a {query}...</InfoDiv>}
      </AppSection>
    );
  }
}

export default App;
