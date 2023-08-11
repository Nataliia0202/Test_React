

import { Link } from 'react-router-dom';
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
    return (
      <>
        <Header>
          <Link to={'/'}>
           
            <Logo>Event Planner</Logo>
          </Link>

          <Wrapper>
            <SearchForm>
              <SearchInput type="text" placeholder="Search by keywords" />
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