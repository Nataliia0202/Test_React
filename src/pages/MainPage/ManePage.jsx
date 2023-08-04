import { MainPageBg } from "./MainPage.styled";
import { EventList } from "components/Events/EventList";
import { Container } from "components/GlobalStyles";

export const ManePage = () => {
    return (
      <>
        <Container>
          <MainPageBg>
            <EventList />
          </MainPageBg>
        </Container>
      </>
    );
}