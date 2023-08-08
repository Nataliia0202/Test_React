import { WrapperButton, ButtonAdd, ButtonFilter, ButtonSort } from "./Button.styled";
import { IconAdd, IconFilter, IconSort } from "components/IconSearch";
import { Link} from 'react-router-dom';

export const Button = () => {
   

    
    return (
      <>
        <WrapperButton>
          <ButtonFilter>
            <IconFilter />
          </ButtonFilter>
          <ButtonSort>
            <IconSort />
          </ButtonSort>
          <Link to="add">
            <ButtonAdd>
              <IconAdd />
            </ButtonAdd>
          </Link>
        </WrapperButton>
      </>
    );
}