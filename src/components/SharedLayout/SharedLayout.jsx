

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
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
    return (
      <>
        <Header>
          <Wrapper>
            <Logo>Event Planner</Logo>
            <Select>
              <Options value="UK">UK</Options>
              <Options value="EN">EN</Options>
            </Select>
          </Wrapper>
          <SearchForm>
            <SearchInput type="text" placeholder="Search by keywords" />
            <IconButton type="submit">
              <IconSearch styled={{ with: 24, height: 24 }} />
            </IconButton>
          </SearchForm>
        </Header>

        <main>
          <Outlet />
        </main>
      </>
    );
}