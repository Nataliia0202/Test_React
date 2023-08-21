
import { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectSearch } from 'redux/selector';
import { setSearch } from 'redux/sliceSearch';
import { IconSearch, IconClose } from 'components/IconSearch';

import {
  Select,
  Options,
  SearchInput,
  IconButton,
  SearchForm,
  IconButtonClose,
} from './SharedLayout.styled';







export const SerchForm = () => {

const inputRef = useRef(null);
const search = useSelector(selectSearch);
//    
    const dispatch = useDispatch();
    
    const onClickClear = () => {
      
      dispatch(setSearch(""));
      inputRef.current?.focus();
  };
  
  


  const onChangeInput = (event) => {
  dispatch(setSearch(event.target.value));
};



    return (
      <>
        <SearchForm>
          <SearchInput
            ref={inputRef}
            type="text"
            name="search"
            placeholder="Search by keywords"
            value={search}
            onChange={onChangeInput}
          />
          <IconButton>
            <IconSearch styled={{ with: 24, height: 24 }} />
          </IconButton>
          {search && (
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