import { GlobalStyle } from "./GlobalStyles";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Container } from "./GlobalStyles";
import { MainPageBg } from "pages/MainPage/MainPage.styled";





export const App = () => {
  return (
    <>
      <Container>
        <SharedLayout />
        <MainPageBg></MainPageBg>
        <GlobalStyle />
      </Container>
    </>
  );
};
