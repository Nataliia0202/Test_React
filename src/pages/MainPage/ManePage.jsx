

import { Button } from "components/Button/Button";
import { EventList } from "components/Events/EventList";
import { Container } from "components/GlobalStyles";
import Pagination from "components/Pagination";


export const ManePage = () => {
  
    return (
      <>
        <Container>
          <Button />
          <EventList />
          <Pagination/>
        </Container>
      </>
    );
}