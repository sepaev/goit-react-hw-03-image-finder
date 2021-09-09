import { Component } from 'react';
import {
  SearchBarHeader,
  SearchForm,
  SearchButton,
  SearchButtonSpan,
  SearchInput,
} from './SearchBar.styled';
// import { FaBeer } from 'react-icons/fa';

class SearchBar extends Component {
  onSubmit = e => {
    e.preventDefault();
    const inputRef = e.target.elements[1];
    const query = inputRef.value.trim();
    if (!query) return;

    this.props.doSearch(query);
    this.setState({ query });
    inputRef.value = '';
  };

  render() {
    return (
      <SearchBarHeader>
        <SearchForm onSubmit={this.onSubmit}>
          <SearchButton type='submit'>
            <SearchButtonSpan>Search</SearchButtonSpan>
          </SearchButton>

          <SearchInput
            className='SearchForm-input'
            type='text'
            autocomplete='off'
            autoFocus
            placeholder='Search images and photos'
          />
        </SearchForm>
      </SearchBarHeader>
    );
  }
}

export default SearchBar;
