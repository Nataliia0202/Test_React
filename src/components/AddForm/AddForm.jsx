
import {
  TitelForf,
  Form,
  LabelInput,
  InputTitel,
  TextareaDescription,
  InputTitelDate,
  InputTitelTime,
  ButtonAdd,
 
} from './AddForm.styled';
import { Container } from "components/Container/Container";


export const AddForm = () => {
    return (
      <>
        <Container>
          <TitelForf>Create new event</TitelForf>
          <Form>
            <LabelInput>
              Title
              <InputTitel />
            </LabelInput>
            <LabelInput>
              Description
              <TextareaDescription type="text" min="1" max="99"/>
            </LabelInput>
            <LabelInput htmlFor="start">
              Select date
              <InputTitelDate type="date" value="2018-07-22" />
            </LabelInput>
            <LabelInput htmlFor="appt">
              Select time
              <InputTitelTime
                type="time"
                id="appt"
                name="appt"
                min="09:00"
                max="18:00"
              />
            </LabelInput>
            <LabelInput>
              Location
              <InputTitel />
            </LabelInput>
            <LabelInput>
              Category
              <InputTitel />
            </LabelInput>
            <LabelInput style={{ color: '#ACA7C3' }}>
              Add picture
              <InputTitel disabled style={{ color: '#ACA7C3' }} />
            </LabelInput>
            <LabelInput>
              Priority
              <InputTitel />
            </LabelInput>
            <ButtonAdd type="submit">Add event</ButtonAdd>
          </Form>
        </Container>
      </>
    );
}