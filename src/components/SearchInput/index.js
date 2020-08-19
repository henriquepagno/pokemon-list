import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

export default function SearchInput({ placeholder, handleSearch }) {
  const _debouncedSearch = _.debounce((text) => {
    handleSearch(text);
  }, 400);

  return (
    <Container>
      <MdSearch size={22} color="#b2b2b2" />
      <input
        name="search"
        type="search"
        placeholder={placeholder}
        onChange={(e) => _debouncedSearch(e.target.value)}
      />
    </Container>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
