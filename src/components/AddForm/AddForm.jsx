
import { TitelForf, Form, LabelInput, InputTitel } from "./AddForm.styled";
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
          </Form>
        </Container>
      </>
    );
}