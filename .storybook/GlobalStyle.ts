import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html {
    font-size: 62.5%;
  }

  body {
    padding: 0rem;
    margin: 0;
  }

  #storybook-preview-iframe {
    background: magenta;
  }
  
  .sb-show-main{
    &.sb-main-padded  {
      display: grid;
      justify-content: center;
      justify-items: center;
      align-content: center;
      align-items: center;
      padding:3rem;
    }
  }

  @media only screen and (max-height: 1200px)    {
    html {
    font-size: 56%;
    }
  }

  @media only screen and (max-height: 1100px)   {
    html {
    font-size: 50%;
    }
  }

  @media only screen and (max-height: 1060px)   {
    html {
    font-size: 43%;
    }
  }
  
  @media only screen and (max-height: 850px)   {
    html {
    font-size: 37%;
    }
  }
  
  @media only screen and (max-height: 700px)   {
    html {
    font-size: 32%;
    }
  }
 

`;
