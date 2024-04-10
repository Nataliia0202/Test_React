

import { Button } from "components/Button/Button";
import { EventList } from "components/Events/EventList";
import { Container } from "components/GlobalStyles";
// import { WrapperSection } from "components/GlobalStyles";

export const ManePage = () => {
  
    return (
      <>
        <Container>
          {/* <WrapperSection> */}
          <Button />
          <EventList />
          {/* </WrapperSection> */}
        </Container>
      </>
    );
}