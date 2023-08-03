import styled from 'styled-components';
import bgMob from '../../components/image/GeoWave2.png';
import bgDeck from '../../components/image/GeoWave22.png';


export const MainPageBg = styled.div`
  background-image: url(${bgMob});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #fafafa;
  display: flex;
  height: 100vh;
  margin-bottom: 60px;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${bgMob});
  }
  @media (min-width: 768px) {
    background-image: url(${bgMob});
    height: 100vh;
    margin-bottom: 72px;
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bgMob});
    }
  }

  @media (min-width: 1280px) {
    background-image: url(${bgDeck});
    height: 100vh;
    width: 100vw;
    margin-bottom: 100px;
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bgDeck});
    }
  }
`;