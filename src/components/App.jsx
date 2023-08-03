import { GlobalStyle } from "./GlobalStyles";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Container } from "./GlobalStyles";






export const App = () => {
  return (
    <>
      <Container>
        <SharedLayout />
        <GlobalStyle />
      </Container>
    </>
  );
};
