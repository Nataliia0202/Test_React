import { WrapperButton, ButtonAdd, ButtonFilter, ButtonSort } from "./Button.styled";
import { IconAdd, IconFilter, IconSort } from "components/IconSearch";
import { Link} from 'react-router-dom';
import { SimpleMenu } from './BtnFilter';


export const Button = () => {
   

    
    return (
      <>
        <WrapperButton>
          <SimpleMenu />
          {/* <ButtonSort>
            <IconSort />
          </ButtonSort>
          <Link to="add">
            <ButtonAdd>
              <IconAdd />
            </ButtonAdd>
          </Link> */}
        </WrapperButton>
      </>
    );
}