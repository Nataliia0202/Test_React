

import { Button } from "components/Button/Button";
import { EventList } from "components/Events/EventList";
import { Container } from "components/GlobalStyles";
import Pagination from "components/Pagination";
import { WrapperSection } from "components/GlobalStyles";

export const ManePage = () => {
  
    return (
      <>
        <Container>
          {/* <WrapperSection> */}
          <Button />
          <EventList />
          <Pagination/>
          {/* </WrapperSection> */}
        </Container>
      </>
    );
}