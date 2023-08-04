import styled, { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import '@fontsource/alata';
import '@fontsource/poppins';
import bgMob from '../components/image/GeoWave2.png';
import bgDeck from '../components/image/GeoWave22.png';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Poppins', 'Alata'
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-image: url(${bgMob});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-color: #fafafa;
      @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${bgMob});
  }
  @media (min-width: 768px) {
    background-image: url(${bgDeck});
    /* height: 100vh;
    margin-bottom: 72px; */
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bgDeck});
    }
  }

  @media (min-width: 1280px) {
    background-image: url(${bgDeck});
 
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bgDeck});
    }
  }
}
    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    h1,h2,h3,h4,h5,h6,p {
        margin: 0;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
    }
`;

export const Container = styled.div`
 max-width: 1280px;
    height: 100vh;
    margin: 0 auto;
    padding: 0 16px;

`