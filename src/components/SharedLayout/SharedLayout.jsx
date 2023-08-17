

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectSearch } from 'redux/selector';
import { setSearch } from 'redux/sliceSearch';
import {
 
  Header,
  Logo,
  Select,
  Options,
  SearchInput,
  IconButton,
  Wrapper,
  SearchForm,
} from './SharedLayout.styled';
import { IconSearch } from 'components/IconSearch';


export const SharedLayout = () => {
  const search = useSelector(selectSearch);
  
const dispatch = useDispatch();


    return (
      <>
        <Header>
          <Link to={'/'}>
            <Logo>Event Planner</Logo>
          </Link>

          <Wrapper>
            <SearchForm>
              <SearchInput
                type="text"
                name="search"
                placeholder="Search by keywords"
                value={search}
                onChange={event => dispatch(setSearch(event.target.value))}
              />
              <IconButton type="submit">
                <IconSearch styled={{ with: 24, height: 24 }} />
              </IconButton>
            </SearchForm>
            <Select>
              <Options value="UK">UK</Options>
              <Options value="EN">EN</Options>
            </Select>
          </Wrapper>
        </Header>
      </>
    );
}