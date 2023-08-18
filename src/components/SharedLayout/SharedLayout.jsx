

import { Link } from 'react-router-dom';
import { SerchForm } from './SearchForm';
import {
 
  Header,
  Logo,
  
  Wrapper,
  
} from './SharedLayout.styled';



export const SharedLayout = () => {
  



    return (
      <>
        <Header>
          <Link to={'/'}>
            <Logo>Event Planner</Logo>
          </Link>

          <Wrapper>
            <SerchForm />
          </Wrapper>
        </Header>
      </>
    );
}