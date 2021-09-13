import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import { AppSection, InfoDiv, InfoH1 } from './App.styled';
import { Component } from 'react';
import { toast } from 'react-toastify';
import toastOptions from '../../options/toast';

class App extends Component {
  state = {
    status: 'idle',
    query: '',
    lastMessage: '',
  };

  handleFormSubmit = query => {
    this.setState({ status: 'resolved', query });
  };

  changeStatus = (newStatus, message = '') => {
    const { status, lastMessage } = this.state;
    if (status !== newStatus) {
      if (message !== '') {
        if (lastMessage !== message) {
          toast.info(message, toastOptions);
        }
        this.setState({ status: newStatus, lastMessage: message });
      } else {
        this.setState({ status: newStatus });
      }
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
        {this.state.status === 'rejected' && <InfoDiv>{this.state.lastMessage}</InfoDiv>}
        {this.state.status === 'pending' && <Loader query={query} />}
      </AppSection>
    );
  }
}

export default App;
