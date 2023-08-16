import { WrapperButton, ButtonAdd,  ButtonSort } from "./Button.styled";
import { IconAdd,IconSort } from "components/IconSearch";

import { SimpleMenu } from './BtnFilter';


export const Button = () => {
   

    
    return (
      <>
        <WrapperButton>
          <SimpleMenu />
          <ButtonSort>
            <IconSort />
          </ButtonSort>
          
            <ButtonAdd to="add">
              <IconAdd />
            </ButtonAdd>
          
        </WrapperButton>
      </>
    );
}