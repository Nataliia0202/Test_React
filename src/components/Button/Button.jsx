
import { IconAdd} from "components/IconSearch";

import { SimpleMenu } from './BtnFilter';
import { BtnSort } from "./BtnSort";
import { WrapperButton, ButtonAdd, TextBtn } from './Button.styled';


export const Button = () => {
   

    
    return (
      <>
        <WrapperButton>
          <SimpleMenu text="Category" />
          <BtnSort text="Sort by" />

          <ButtonAdd to="add">
            <IconAdd />
            <TextBtn>Add new event</TextBtn>
          </ButtonAdd>
        </WrapperButton>
      </>
    );
}