import React from 'react';
import _ from 'lodash';

import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

import Colors from '../../styles/Constants';

interface Parameters {
  placeholder: string;
  handleSearch: (data: string) => void;
}

export default function SearchInput({ placeholder, handleSearch }: Parameters) {
  const _debouncedSearch = _.debounce((text: string) => {
    handleSearch(text);
  }, 400);

  return (
    <Container>
      <MdSearch size={22} color={Colors.darkGray} />
      <input
        name="search"
        type="search"
        placeholder={placeholder}
        onChange={(e) => _debouncedSearch(e.target.value)}
      />
    </Container>
  );
}
