import styled, { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import '@fontsource/alata';
import '@fontsource/poppins';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Poppins', 'Alata'
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #fff;
       
        
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