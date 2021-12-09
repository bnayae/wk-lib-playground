import styled from 'styled-components';
import { StyledButtonRaw } from './StyledButtonRaw';

export const StyledButton = styled(StyledButtonRaw)`
  .button {
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
  }
  .button--primary {
    color: white;
    background-color: #1ea7fd;
  }
  .button--secondary {
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  }
  .button--small {
    font-size: 3rem;
    padding: 1rem 1.6rem;
  }
  .button--medium {
    font-size: 5rem;
    padding: 1.3rem 2.4rem;
  }
  .button--large {
    font-size: 7rem;
    padding: 1.4rem 2.8rem;
  }
`;
