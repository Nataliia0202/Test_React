
import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearch } from 'redux/selector';
import { setSearch } from 'redux/sliceSearch';
import { IconSearch, IconClose } from 'components/IconSearch';
import debounce from 'lodash.debounce';
import { useCallback } from 'react';

import {
  Select,
  Options,
  SearchInput,
  IconButton,
  SearchForm,
  IconButtonClose,
} from './SharedLayout.styled';







export const SerchForm = () => {
const [value, setValue] = useState('');
const inputRef = useRef(null);
// const search = useSelector(selectSearch);
//     const searchTitel = useParams(search);
//     console.log(searchTitel);
    const dispatch = useDispatch();
    
    const onClickClear = () => {
      dispatch(setSearch(''));
      setValue('');
      inputRef.current?.focus();
    };

const updateSearchValue = useCallback(
  debounce((str) => {
    dispatch(setSearch(str));
  }, 500),
  []
);
const onChangeInput = (event) => {
  setValue(event.target.value);
  updateSearchValue(event.target.value);
};



    return (
      <>
        <SearchForm>
          <SearchInput
            ref={inputRef}
            type="text"
            name="search"
            placeholder="Search by keywords"
            value={value}
            onChange={onChangeInput}
          />
          <IconButton>
            <IconSearch styled={{ with: 24, height: 24 }} />
          </IconButton>
          {value && (
            <IconButtonClose type="button" onClick={onClickClear}>
              <IconClose styled={{ with: 24, height: 24 }} />
            </IconButtonClose>
          )}
        </SearchForm>
        <Select>
          <Options value="UK">UK</Options>
          <Options value="EN">EN</Options>
        </Select>
      </>
    );
}